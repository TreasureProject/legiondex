import type { Filter, FilterMethod } from "~/types";

export const addFilter = (filters: Filter[], filter: Filter) => {
  const nextFilters = [...filters];
  const foundFilter = nextFilters.find(
    ({ id, method }) => id === filter.id && method === filter.method
  );
  if (foundFilter) {
    foundFilter.value = filter.value;
    return nextFilters;
  }

  return [...nextFilters, filter];
};

export const getFiltersFromSearchParams = (
  searchParams: URLSearchParams
): Filter[] => {
  const filters: Filter[] = [];
  for (const [key, value] of searchParams) {
    if (key.includes("_")) {
      const filterParts = key.split("_");
      const numValue = parseFloat(value);
      filters.push({
        id: filterParts[0],
        method: filterParts[1] as FilterMethod,
        value: Number.isNaN(numValue) ? value : numValue,
      });
    }
  }

  return filters;
};

export const clearSearchParams = (searchParams: URLSearchParams) => {
  const keys: string[] = [];
  for (const [key] of searchParams) {
    keys.push(key);
  }

  keys.forEach((key) => searchParams.delete(key));
};

export const setFiltersOnSearchParams = (
  filters: Filter[],
  searchParams: URLSearchParams
) => {
  clearSearchParams(searchParams);
  filters.forEach(({ id, method, value }) => {
    searchParams.set(`${id}_${method}`, value.toString());
  });
};
