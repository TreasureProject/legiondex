import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  Link,
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
import { GitHubIcon } from "./components/Icons";

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
      <body className="bg-slate-100 text-black dark:bg-slate-900 dark:text-slate-100">
        <nav className="border-b border-gray-200 bg-white px-4 shadow-md dark:border-slate-900 dark:bg-slate-900">
          <div className="container mx-auto flex items-center gap-6 md:gap-8">
            <NavLink
              to="/"
              className="group py-3 text-3xl font-black uppercase tracking-tight"
            >
              <span className="px-1 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900">
                Legiondex
              </span>
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
        <div className="bg-white dark:bg-slate-800">
          <Outlet />
        </div>
        <footer>
          <div className="container mx-auto max-w-[720px]">
            <div className="p-8">
              <div className="grid grid-cols-1 gap-6 text-sm text-sky-800 dark:text-slate-400 sm:grid-cols-3">
                <ul>
                  <li>
                    <span className="font-medium dark:text-slate-50">
                      Legions
                    </span>
                  </li>
                  {[
                    { to: "/", title: "All Legions" },
                    {
                      to: "/?generation=Genesis",
                      title: "All Genesis Legions",
                    },
                    {
                      to: "/?generation=Genesis&rarity=Common",
                      title: "Genesis Common Legions",
                    },
                    {
                      to: "/?generation=Genesis&rarity=Special",
                      title: "Genesis Special Legions",
                    },
                    {
                      to: "/?generation=Genesis&rarity=Uncommon",
                      title: "Genesis Uncommon Legions",
                    },
                    {
                      to: "/?generation=Genesis&rarity=Rare",
                      title: "Genesis Rare Legions",
                    },
                    {
                      to: "/?generation=Genesis&rarity=Legendary",
                      title: "1/1 Legions",
                    },
                    {
                      to: "/?generation=Auxiliary",
                      title: "All Auxiliary Legions",
                    },
                    {
                      to: "/?generation=Auxiliary&rarity=Common",
                      title: "Auxiliary Common Legions",
                    },
                    {
                      to: "/?generation=Auxiliary&rarity=Uncommon",
                      title: "Auxiliary Uncommon Legions",
                    },
                    {
                      to: "/?generation=Auxiliary&rarity=Rare",
                      title: "Auxiliary Rare Legions",
                    },
                  ].map(({ to, title }) => (
                    <li key={to}>
                      <Link to={to} className="hover:underline">
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul>
                  <li>
                    <span className="font-medium dark:text-slate-50">
                      Owners
                    </span>
                  </li>
                  <li>
                    <Link
                      to="/owners/0xf5411006eefd66c213d2fd2033a1d340458b7226"
                      className="hover:underline"
                    >
                      BattleFly Treasury
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/owners/0x4deFaa0B91EA699F0Da90DEC276bbaa629015140"
                      className="hover:underline"
                    >
                      Magic Dragon DAO
                    </Link>
                  </li>
                </ul>
                <div className="dark:text-slate-50">
                  <a
                    href="https://github.com/TreasureProject/legiondex"
                    title="GitHub"
                    className="group"
                  >
                    <GitHubIcon className="h-10 w-10" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <ScrollRestoration />
        <Scripts />
        <script
          id="analytics"
          src="https://efficient-bloc-party.treasure.lol/script.js"
          data-site="XBZCEUKN"
          defer
        ></script>
        <LiveReload />
      </body>
    </html>
  );
}
