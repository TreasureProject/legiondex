import type { GetLegionDetailsQuery } from "~/graphql/bridgeworld.generated";
import type { Summon } from "~/types";
import { normalizeLegion } from "./legion.server";

type RawSummon = GetLegionDetailsQuery["summons"][0];

export const normalizeSummon = ({
  id,
  endTimestamp,
  status,
  success,
  resultToken,
}: RawSummon): Summon => ({
  id,
  endDate: new Date(parseInt(endTimestamp)),
  status,
  success: !!resultToken || !!success,
  resultLegion: resultToken ? normalizeLegion(resultToken) : undefined,
});
