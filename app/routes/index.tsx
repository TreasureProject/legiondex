import type { LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { NavLink, useLoaderData } from "@remix-run/react";

import type { Legion, LegionGeneration } from "~/types";
import { getLegions } from "~/models/legion.server";
import { Rarity } from "~/graphql/bridgeworld.generated";
import clsx from "clsx";
import LegionCard from "~/components/LegionCard";

type LoaderData = {
  legions: Legion[];
  filterGeneration?: LegionGeneration;
  filterRarity?: string;
};

type NavItem = {
  path: string;
  name: string;
};

const LEGIONS_RARITY_NAV: Partial<Record<LegionGeneration, NavItem[]>> = {
  Genesis: [
    { path: "/?generation=Genesis", name: "All Rarities" },
    { path: "/?generation=Genesis&rarity=Common", name: "Common" },
    { path: "/?generation=Genesis&rarity=Special", name: "Special" },
    { path: "/?generation=Genesis&rarity=Uncommon", name: "Uncommon" },
    { path: "/?generation=Genesis&rarity=Rare", name: "Rare" },
    { path: "/?generation=Genesis&rarity=Legendary", name: "Legendary" },
  ],
  Auxiliary: [
    { path: "/?generation=Auxiliary", name: "All Rarities" },
    { path: "/?generation=Auxiliary&rarity=Common", name: "Common" },
    { path: "/?generation=Auxiliary&rarity=Uncommon", name: "Uncommon" },
    { path: "/?generation=Auxiliary&rarity=Rare", name: "Rare" },
  ],
};

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
    "og:image":
      legions?.[0].imageAlt ??
      legions?.[0].image ??
      "https://treasure-marketplace.mypinata.cloud/ipfs/Qmf4UCM6GDadqY7hcu73tHHEQDqvyFUqA6aDYkJWVh8vJo/Genesis/Rare/Executioner/3C.jpg",
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const generation =
    (url.searchParams.get("generation") as LegionGeneration) || undefined;
  const rarity = (url.searchParams.get("rarity") as Rarity) || undefined;

  const legions = await getLegions({ generation, rarity });

  return json<LoaderData>({
    legions,
    filterGeneration: generation,
    filterRarity: rarity,
  });
};

export default function Home() {
  const { legions, filterGeneration, filterRarity } =
    useLoaderData<LoaderData>();
  return (
    <main className="container mx-auto mt-6 mb-10 px-4 text-center md:mt-10">
      {filterGeneration && LEGIONS_RARITY_NAV[filterGeneration] && (
        <ul className="mb-6 flex flex-col items-center justify-center gap-1 md:mb-10 md:flex-row md:gap-6">
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        {legions.map((legion) => (
          <LegionCard key={legion.id} legion={legion} />
        ))}
      </div>
    </main>
  );
}
