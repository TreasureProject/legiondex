import { GraphQLClient } from "graphql-request";

import { getSdk as getBridgeworldSdk } from "~/graphql/bridgeworld.generated";
import { getSdk as getMarketplaceSdk } from "~/graphql/marketplace.generated";

export type BridgeworldClient = ReturnType<typeof getBridgeworldSdk>;

export const createBridgeworldSdk = (url: string) =>
  getBridgeworldSdk(new GraphQLClient(url, { fetch }));

export const marketplaceSdk = getMarketplaceSdk(
  new GraphQLClient(
    "https://api.thegraph.com/subgraphs/name/treasureproject/marketplace",
    { fetch }
  )
);
