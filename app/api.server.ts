import { GraphQLClient } from "graphql-request";

import { getSdk as getBridgeworldSdk } from "~/graphql/bridgeworld.generated";

export const bridgeworldSdk = getBridgeworldSdk(
  new GraphQLClient(
    "https://api.thegraph.com/subgraphs/name/treasureproject/bridgeworld",
    { fetch }
  )
);
