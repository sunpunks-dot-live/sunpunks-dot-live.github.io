import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { ViteDevServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isTest = process.env.VITEST;

export async function createServer({
  root = process.cwd(),
  isProd = process.env.NODE_ENV === "production",
  hmrPort,
}: {
  root?: string;
  isProd?: boolean;
  hmrPort?: number;
} = {}) {
  const resolve = (p: string) => path.resolve(__dirname, p);
  const indexProd = isProd
    ? fs.readFileSync(resolve("dist/client/index.html"), "utf-8")
    : "";

  const app = express();
  let vite: ViteDevServer;

  if (!isProd) {
    vite = await (
      await import("vite")
    ).createServer({
      root,
      logLevel: isTest ? "error" : "info",
      server: {
        middlewareMode: true,
        watch: {
          usePolling: true,
          interval: 100,
        },
        hmr: {
          port: hmrPort,
        },
      },
      appType: "custom",
    });
    app.use(vite.middlewares);
  } else {
    app.use((await import("compression")).default());
    app.use(
      (await import("serve-static")).default(resolve("dist/client"), {
        index: false,
      }),
    );
  }

  app.use("*", async (req, res) => {
    try {
      const url = req.originalUrl;

      let template: string;
      let render: (url: string, context: Record<string, string>) => string;

      if (!isProd) {
        template = fs.readFileSync(resolve("index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
      } else {
        template = indexProd;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        render = (await import("./dist.server/entry-server.tsx")).render;
      }

      const context: Record<string, string> = {};
      const appHtml = render(url, context);

      if (context.url) {
        return res.redirect(301, context.url);
      }

      const html = template.replace(`<!--app-html-->`, appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      const err = e as Error;
      !isProd && vite.ssrFixStacktrace(err);
      console.error(err.stack);
      res.status(500).end(err.stack);
    }
  });

  return { app };
}

if (!isTest) {
  createServer().then(({ app }) => {
    app.listen(5173, () => {
      console.log("Dev server running on http://localhost:5173");
    });
  });
}
