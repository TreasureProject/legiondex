import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { SelectorIcon } from "@heroicons/react/solid";
import clsx from "clsx";

type Value = number | string;

type Option = {
  label: string;
  value: Value;
};

type Props = {
  value: Value;
  options: Option[];
  onChange: (value: Value) => void;
};

export default function Dropdown({ value, options, onChange }: Props) {
  const selectedOption = options.find((option) => option.value === value);
  const hasMultipleOptions = options.length > 1;
  return (
    <Menu as="div" className="relative text-left">
      <Menu.Button
        className={clsx(
          "flex w-full items-center justify-between gap-1 rounded-md border border-sky-800 bg-white py-2 pl-3 pr-2 text-left text-sm text-sky-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100",
          hasMultipleOptions
            ? "transition-colors hover:border-black hover:text-black dark:hover:border-slate-600 dark:hover:text-slate-100"
            : "cursor-default"
        )}
      >
        {selectedOption?.label ?? value}
        {hasMultipleOptions && (
          <SelectorIcon className="h-5 w-5" aria-hidden="true" />
        )}
      </Menu.Button>
      {hasMultipleOptions && (
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 z-10 mt-0.5 min-w-full origin-top-left space-y-1 rounded-md border border-sky-800 bg-white px-1.5 py-2 text-sm dark:border-slate-700 dark:bg-slate-900">
            {options.map((option) => (
              <Menu.Item key={option.value}>
                <button
                  className={clsx(
                    "block w-full rounded-md px-2 py-1.5 text-left text-sky-800 hover:bg-sky-50 dark:text-slate-100 dark:hover:bg-slate-800",
                    value === option.value &&
                      "bg-sky-50 font-bold dark:bg-slate-800"
                  )}
                  onClick={() => onChange(option.value)}
                >
                  {option.label}
                </button>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      )}
    </Menu>
  );
}
