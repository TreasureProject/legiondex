import type { LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import invariant from "tiny-invariant";
import { ExternalLinkIcon } from "@heroicons/react/outline";

import type { Filter, Legion } from "~/types";
import { getUserLegions } from "~/models/legion.server";
import { truncateAddress } from "~/utils/address";
import LegionCard from "~/components/LegionCard";
import { generateMetaTags } from "~/utils/meta";
import LegionFilters from "~/components/LegionFilters";
import {
  getFiltersFromSearchParams,
  setFiltersOnSearchParams,
} from "~/utils/filter";

type LoaderData = {
  address: string;
  legions: Legion[];
  filters: Filter[];
};

export const meta: MetaFunction = ({ data }) => {
  const { address, legions } = data as LoaderData;
  return generateMetaTags(
    `${truncateAddress(address)}'s Legion Army`,
    legions[0]?.imageAlt ?? legions[0]?.image
  );
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const { address } = params;
  invariant(address, "Address not found");

  const url = new URL(request.url);
  const filters = getFiltersFromSearchParams(url.searchParams);
  const legions = await getUserLegions(address, filters);

  return json<LoaderData>({
    address,
    legions,
    filters,
  });
};

export default function UserProfile() {
  const { address, legions, filters } = useLoaderData<LoaderData>();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <main className="container mx-auto px-4 pt-6 pb-10 text-center md:pt-10">
      <h1 className="text-2xl font-bold md:text-4xl">
        {truncateAddress(address)}'s Legion Army
      </h1>
      <a
        href={`https://arbiscan.io/token/0xfe8c1ac365ba6780aec5a985d989b327c27670a1?a=${address}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 inline-flex items-center justify-center gap-1 text-sm text-sky-800 hover:underline dark:text-slate-400"
      >
        View on Arbiscan <ExternalLinkIcon className="h-4 w-4" />
      </a>
      <div className="my-6 flex flex-wrap items-center justify-center gap-1 md:justify-start">
        <LegionFilters
          selectedFilters={filters}
          onChange={(filters) => {
            setFiltersOnSearchParams(filters, searchParams);
            setSearchParams(searchParams);
          }}
        />
      </div>
      {legions.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          {legions.map((legion) => (
            <LegionCard key={legion.id} legion={legion} />
          ))}
        </div>
      ) : (
        <div className="m-6">No Legions found.</div>
      )}
    </main>
  );
}
