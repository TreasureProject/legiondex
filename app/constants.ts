import { ConstellationElement, FilterMethod, LegionStatus } from "./types";

export const FILTER_METHOD_MAPPING: Record<FilterMethod, string> = {
  [FilterMethod.Equals]: "is",
  [FilterMethod.Not]: "is not",
  [FilterMethod.GreaterThan]: "is greater than",
  [FilterMethod.LessThan]: "is less than",
  [FilterMethod.GreaterThanOrEqualTo]: "is greater than or equal to",
  [FilterMethod.LessThanOrEqualTo]: "is less than or equal to",
  [FilterMethod.In]: "includes",
  [FilterMethod.NotIn]: "excludes",
};

export const FILTER_METHOD_SHORT_MAPPING: Record<FilterMethod, string> = {
  [FilterMethod.Equals]: "=",
  [FilterMethod.Not]: "!=",
  [FilterMethod.GreaterThan]: ">",
  [FilterMethod.LessThan]: "<",
  [FilterMethod.GreaterThanOrEqualTo]: ">=",
  [FilterMethod.LessThanOrEqualTo]: "<",
  [FilterMethod.In]: "includes",
  [FilterMethod.NotIn]: "excludes",
};

export const LEGION_FILTERS = {
  questingLevel: {
    label: "Quest Level",
    methods: [
      FilterMethod.Equals,
      FilterMethod.GreaterThanOrEqualTo,
      FilterMethod.LessThanOrEqualTo,
    ],
    options: [1, 2, 3, 4, 5, 6],
  },
  craftingLevel: {
    label: "Craft Level",
    methods: [
      FilterMethod.Equals,
      FilterMethod.GreaterThanOrEqualTo,
      FilterMethod.LessThanOrEqualTo,
    ],
    options: [1, 2, 3, 4, 5, 6],
  },
  constellation: {
    label: "Constellation",
    methods: [FilterMethod.In],
    options: Object.values(ConstellationElement),
  },
  constellationLevel: {
    label: "Constellation Level",
    methods: [
      FilterMethod.Equals,
      FilterMethod.GreaterThanOrEqualTo,
      FilterMethod.LessThanOrEqualTo,
    ],
    options: [1, 2, 3, 4, 5, 6, 7],
  },
  status: {
    label: "Status",
    methods: [FilterMethod.Equals, FilterMethod.Not],
    options: Object.values(LegionStatus),
  },
} as Record<
  string,
  {
    label: string;
    methods: FilterMethod[];
    options: (string | number)[];
  }
>;
