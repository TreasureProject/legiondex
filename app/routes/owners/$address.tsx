import { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { ExternalLinkIcon } from "@heroicons/react/outline";

import type { Legion } from "~/types";
import { getUserLegions } from "~/models/legion.server";
import { truncateAddress } from "~/utils/address";
import LegionCard from "~/components/LegionCard";

type LoaderData = {
  address: string;
  legions: Legion[];
};

export const loader: LoaderFunction = async ({ params }) => {
  const { address } = params;
  invariant(address, "Address not found");

  const legions = await getUserLegions(address);

  return json<LoaderData>({
    address,
    legions,
  });
};

export default function UserProfile() {
  const { address, legions } = useLoaderData<LoaderData>();
  return (
    <main className="container mx-auto mt-6 mb-10 px-4 text-center md:mt-10">
      <h1 className="text-2xl font-bold md:text-4xl">
        {truncateAddress(address)}'s Legion Army
      </h1>
      <a
        href={`https://arbiscan.io/token/0xfe8c1ac365ba6780aec5a985d989b327c27670a1?a=${address}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 inline-flex items-center justify-center gap-1 text-sm text-sky-800 hover:underline"
      >
        View on Arbiscan <ExternalLinkIcon className="h-4 w-4" />
      </a>
      <div className="mt-6 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        {legions.map((legion) => (
          <LegionCard key={legion.id} legion={legion} />
        ))}
      </div>
    </main>
  );
}
