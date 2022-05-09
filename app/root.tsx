import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetchers,
  useTransition,
} from "@remix-run/react";
import NProgress from "nprogress";
import { useEffect, useMemo } from "react";

import nProgressStyles from "./styles/nprogress.css";
import tailwindStylesheetUrl from "./styles/tailwind.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: nProgressStyles },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const transition = useTransition();
  const fetchers = useFetchers();

  const state = useMemo<"idle" | "loading">(
    function getGlobalState() {
      const states = [
        transition.state,
        ...fetchers.map((fetcher) => fetcher.state),
      ];
      if (states.every((state) => state === "idle")) return "idle";
      return "loading";
    },
    [transition.state, fetchers]
  );

  // slim loading bars on top of the page, for page transitions
  useEffect(() => {
    if (state === "loading") NProgress.start();
    if (state === "idle") NProgress.done();
  }, [state, transition.state]);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <nav className="border-b border-gray-200 bg-white px-4 drop-shadow-lg">
          <div className="container mx-auto flex items-center gap-6 md:gap-8">
            <NavLink
              to="/"
              className="py-3 text-3xl font-black uppercase tracking-tight"
            >
              Legiondex
            </NavLink>
            <div className="flex flex-1 items-center justify-between">
              <div className="flex items-center gap-4 text-sm font-medium md:gap-6">
                <NavLink to="/" className="hidden hover:underline md:block">
                  All Legions
                </NavLink>
                <NavLink to="/?generation=Genesis" className="hover:underline">
                  Genesis
                </NavLink>
                <NavLink
                  to="/?generation=Auxiliary"
                  className="hover:underline"
                >
                  Auxiliary
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
