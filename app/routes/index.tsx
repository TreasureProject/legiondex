import type { LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Link, NavLink, useLoaderData } from "@remix-run/react";

import type { Legion, LegionGeneration } from "~/types";
import { getLegions } from "~/models/legion.server";
import { Rarity } from "~/graphql/bridgeworld.generated";
import clsx from "clsx";
import LegionCard from "~/components/LegionCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

type LoaderData = {
  legions: Legion[];
  filterGeneration?: LegionGeneration;
  filterRarity?: Rarity;
  page: number;
};

type NavItem = {
  path: string;
  name: string;
};

const buildFilterPath = (
  generation?: LegionGeneration,
  rarity?: Rarity,
  page = 1
) => {
  const filters = [];
  if (generation) {
    filters.push(`generation=${generation}`);
    if (rarity) {
      filters.push(`rarity=${rarity}`);
    }
  }

  if (page > 1) {
    filters.push(`page=${page}`);
  }

  return `/?${filters.join("&")}`;
};

const LEGIONS_RARITY_NAV: Partial<Record<LegionGeneration, NavItem[]>> = {
  Genesis: [
    { path: buildFilterPath("Genesis"), name: "All Rarities" },
    { path: buildFilterPath("Genesis", Rarity.Common), name: Rarity.Common },
    { path: buildFilterPath("Genesis", Rarity.Special), name: Rarity.Special },
    {
      path: buildFilterPath("Genesis", Rarity.Uncommon),
      name: Rarity.Uncommon,
    },
    { path: buildFilterPath("Genesis", Rarity.Rare), name: Rarity.Rare },
    {
      path: buildFilterPath("Genesis", Rarity.Legendary),
      name: Rarity.Legendary,
    },
  ],
  Auxiliary: [
    { path: buildFilterPath("Auxiliary"), name: "All Rarities" },
    { path: buildFilterPath("Auxiliary", Rarity.Common), name: Rarity.Common },
    {
      path: buildFilterPath("Auxiliary", Rarity.Uncommon),
      name: Rarity.Uncommon,
    },
    { path: buildFilterPath("Auxiliary", Rarity.Rare), name: Rarity.Rare },
  ],
};

const LEGIONS_PER_PAGE = 30;

export const meta: MetaFunction = ({ data }) => {
  const { legions, filterGeneration, filterRarity } = data as LoaderData;
  let title = "All Legions";
  if (filterGeneration && filterRarity) {
    if (filterRarity === Rarity.Legendary) {
      title = "1/1 Legions";
    } else {
      title = `${filterGeneration} ${filterRarity} Legions`;
    }
  } else if (filterGeneration) {
    title = `${filterGeneration} Legions`;
  }

  return {
    title: `${title} | Legiondex`,
    description: "Your guide to the inhabitants of Bridgeworld.",
    "og:image": filterGeneration
      ? legions?.[0].imageAlt ?? legions?.[0].image
      : "https://treasure-marketplace.mypinata.cloud/ipfs/Qmf4UCM6GDadqY7hcu73tHHEQDqvyFUqA6aDYkJWVh8vJo/Genesis/Rare/Executioner/3C.jpg",
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const generation =
    (url.searchParams.get("generation") as LegionGeneration) || undefined;
  const rarity = (url.searchParams.get("rarity") as Rarity) || undefined;
  const pageString = url.searchParams.get("page");
  const page = pageString ? parseInt(pageString) : 1;

  const legions = await getLegions(
    LEGIONS_PER_PAGE,
    (page - 1) * LEGIONS_PER_PAGE,
    { generation, rarity }
  );
  return json<LoaderData>({
    legions,
    filterGeneration: generation,
    filterRarity: rarity,
    page,
  });
};

export default function Home() {
  const { legions, filterGeneration, filterRarity, page } =
    useLoaderData<LoaderData>();

  const renderPaginationControls = (className?: string) => (
    <div
      className={clsx(
        "flex items-center justify-between px-2 text-sm",
        className
      )}
    >
      <div>
        {page > 1 && (
          <Link
            to={buildFilterPath(filterGeneration, filterRarity, page - 1)}
            className="flex items-center gap-1 text-sky-800 hover:underline"
          >
            <ChevronLeftIcon className="h-3 w-3" /> Previous
          </Link>
        )}
      </div>
      {legions.length === LEGIONS_PER_PAGE && (
        <Link
          to={buildFilterPath(filterGeneration, filterRarity, page + 1)}
          className="flex items-center gap-1 text-sky-800 hover:underline"
        >
          Next <ChevronRightIcon className="h-3 w-3" />
        </Link>
      )}
    </div>
  );

  return (
    <main className="container mx-auto mt-6 mb-12 px-4 text-center md:mt-10">
      {filterGeneration && LEGIONS_RARITY_NAV[filterGeneration] && (
        <ul className="flex flex-col items-center justify-center gap-1 md:flex-row md:gap-6">
          {LEGIONS_RARITY_NAV[filterGeneration]?.map(({ path, name }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={clsx(
                  "rounded-full px-3 py-1 md:px-4 md:py-2",
                  (!filterRarity && name.includes("All")) ||
                    filterRarity === name
                    ? "bg-slate-100 font-semibold"
                    : "hover:underline"
                )}
              >
                {name === "Legendary" ? "1/1" : name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      {renderPaginationControls("my-3")}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        {legions.map((legion) => (
          <LegionCard key={legion.id} legion={legion} />
        ))}
      </div>
      {renderPaginationControls("mt-5")}
    </main>
  );
}
