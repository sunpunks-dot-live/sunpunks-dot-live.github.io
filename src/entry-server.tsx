import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { App } from "./App";

export function render(url: string, context: Record<string, string>) {
  return ReactDOMServer.renderToString(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <StaticRouter location={url} context={context}>
      <App />
    </StaticRouter>,
  );
}
