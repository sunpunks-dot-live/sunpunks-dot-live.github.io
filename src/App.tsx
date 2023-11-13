// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
import { Route, Routes } from "react-router-dom";
import type { FC } from "react";
import "./app.css";
import { Navbar } from "./components/navbar.tsx";

const pages: Record<string, { default: FC; RANK: number }> = import.meta.glob(
  "./pages/*.tsx",
  { eager: true },
);

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)![1];

  return {
    name,
    path: name === "home" ? "/" : `/${name.toLowerCase()}`,
    component: pages[path].default,
    rank: pages[path].RANK,
  };
});

export function App() {
  return (
    <>
      <Navbar routes={routes} />
      <main className="min-h-screen p-8 bg-sp-pink max-w-screen">
        <Routes>
          {routes.map(({ path, component: RouteComp }) => {
            return <Route key={path} path={path} element={<RouteComp />} />;
          })}
        </Routes>
      </main>
    </>
  );
}
