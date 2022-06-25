import { Popover, Transition } from "@headlessui/react";
import { PlusIcon, RefreshIcon, XIcon } from "@heroicons/react/solid";
import { Fragment, useEffect, useRef, useState } from "react";
import { usePopper } from "react-popper";
import {
  FILTER_METHOD_MAPPING,
  FILTER_METHOD_SHORT_MAPPING,
  LEGION_FILTERS,
} from "~/constants";
import type { Filter } from "~/types";
import { FilterMethod } from "~/types";
import { addFilter } from "~/utils/filter";
import Dropdown from "./Dropdown";

type Props = {
  selectedFilters: Filter[];
  onChange: (filters: Filter[]) => void;
};

export default function LegionFilters({ selectedFilters, onChange }: Props) {
  const [newFilter, setNewFilter] = useState<Filter>({
    id: "questingLevel",
    method: FilterMethod.Equals,
    value: 1,
  });
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const popperRef = useRef<HTMLDivElement | null>(null);
  const { attributes } = usePopper(buttonRef.current, popperRef.current);

  useEffect(() => {
    setNewFilter((currentNewFilter) => ({
      ...currentNewFilter,
      method: LEGION_FILTERS[newFilter.id].methods[0],
      value: LEGION_FILTERS[newFilter.id].options[0],
    }));
  }, [newFilter.id]);

  const handleChangeNewFilter =
    (field: keyof Filter) => (value: string | number) => {
      setNewFilter((currentNewFilter) => ({
        ...currentNewFilter,
        [field]: value,
      }));
    };

  const handleAddNewFilter = (callback: () => void) => {
    onChange(addFilter(selectedFilters, newFilter));
    callback();
  };

  const handleRemoveFilter = (filter: Filter) => {
    const nextSelectedFilters = [...selectedFilters];
    nextSelectedFilters.splice(nextSelectedFilters.indexOf(filter), 1);
    onChange(nextSelectedFilters);
  };

  const handleRemoveAllFilters = () => {
    onChange([]);
  };

  return (
    <>
      <Popover as="div" className="relative">
        <Popover.Button
          className="flex items-center gap-1 rounded-lg border border-sky-800 bg-sky-100 p-2 text-sm font-medium text-sky-800 transition-colors hover:border-black hover:text-black dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:text-slate-100"
          ref={buttonRef}
        >
          <PlusIcon className="h-3 w-3" />
          Add Filter
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Popover.Panel
            className="absolute left-0 z-20 mt-0.5 flex min-w-[200px] origin-top-left flex-col gap-1.5 rounded-lg border border-sky-800 bg-sky-50 px-2 py-3 dark:border-slate-700 dark:bg-slate-900"
            ref={popperRef}
            {...attributes.popper}
          >
            {({ close }) => (
              <>
                <Dropdown
                  value={newFilter.id}
                  options={Object.entries(LEGION_FILTERS).map(
                    ([value, { label }]) => ({
                      label,
                      value,
                    })
                  )}
                  onChange={handleChangeNewFilter("id")}
                />
                <Dropdown
                  value={newFilter.method}
                  options={LEGION_FILTERS[newFilter.id].methods.map(
                    (value) => ({
                      label: FILTER_METHOD_MAPPING[value],
                      value,
                    })
                  )}
                  onChange={handleChangeNewFilter("method")}
                />
                <Dropdown
                  value={newFilter.value}
                  options={LEGION_FILTERS[newFilter.id].options.map(
                    (value) => ({
                      label: value.toString(),
                      value,
                    })
                  )}
                  onChange={handleChangeNewFilter("value")}
                />
                <div className="mt-2 flex justify-between gap-6 text-sm">
                  <button
                    className="rounded-md bg-sky-800 px-2 py-1 text-slate-100 opacity-70 transition-opacity hover:opacity-100 dark:bg-slate-700"
                    onClick={() => close()}
                  >
                    Cancel
                  </button>
                  <button
                    className="rounded-md bg-sky-800 px-2 py-1 font-medium text-slate-100 transition-colors hover:bg-sky-700 dark:border dark:border-slate-500 dark:bg-slate-700 dark:hover:border-slate-300 dark:hover:bg-slate-700"
                    onClick={() => handleAddNewFilter(close)}
                  >
                    Apply Filter
                  </button>
                </div>
              </>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
      {selectedFilters.map((filter) => {
        return (
          <div
            key={`${filter.id}-${filter.method}-${filter.value}`}
            className="inline-flex items-center gap-1 rounded-lg bg-sky-800 p-2 text-sm font-medium text-white dark:bg-slate-700 dark:text-slate-100"
          >
            <span>{LEGION_FILTERS[filter.id].label}</span>
            <span className="font-light">
              {FILTER_METHOD_SHORT_MAPPING[filter.method]}
            </span>
            <span>{filter.value}</span>
            <button
              type="button"
              className="ml-0.5 rounded-full p-0.5 text-slate-100 transition-colors hover:bg-sky-500 hover:text-white dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-slate-200"
              onClick={() => handleRemoveFilter(filter)}
            >
              <XIcon className="mx-auto h-3 w-3" />
            </button>
          </div>
        );
      })}
      {selectedFilters.length > 0 && (
        <button
          className="flex items-center gap-1 rounded-lg border border-sky-800 bg-sky-100 p-2 text-sm font-medium text-sky-800 transition-colors hover:border-black hover:text-black dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:text-slate-100"
          onClick={handleRemoveAllFilters}
        >
          <RefreshIcon className="h-3 w-3" />
          Reset Filters
        </button>
      )}
    </>
  );
}
