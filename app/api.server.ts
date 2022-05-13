import { GraphQLClient } from "graphql-request";

import { getSdk as getBridgeworldSdk } from "~/graphql/bridgeworld.generated";
import { getSdk as getMarketplaceSdk } from "~/graphql/marketplace.generated";

export const bridgeworldSdk = getBridgeworldSdk(
  new GraphQLClient(
    "https://api.thegraph.com/subgraphs/name/treasureproject/bridgeworld",
    { fetch }
  )
);

export const marketplaceSdk = getMarketplaceSdk(
  new GraphQLClient(
    "https://api.thegraph.com/subgraphs/name/treasureproject/marketplace",
    { fetch }
  )
);
