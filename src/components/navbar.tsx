import { Link } from "react-router-dom";

type NavbarProps = {
  routes: Array<{ name: string; path: string }>;
};
export function Navbar({ routes }: NavbarProps) {
  return (
    <nav className="flex flex-col sm:flex-col md:flex-row justify-between px-8 py-4 bg-sp-pink text-sp-yellow">
      <h1 className="font-display text-4xl md:text-7xl lg:text-9xl">
        SUNPUNKS
      </h1>
      <ul className="flex flex-row gap-4 items-center">
        {routes.map((route) => (
          <Link to={route.path} key={route.path} className="font-body">
            {route.name.toUpperCase()}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
