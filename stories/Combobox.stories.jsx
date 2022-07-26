import React from "react";

import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Headless UI/Combobox (Autocomplete)",
	component: Combobox,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	// argTypes: {
	// 	className: { control: "className" },
	// },
	// argTypes: {
	// 	disabled: { control: "boolean" },
	// 	pills: { control: "boolean", options: [true, false] },
	// },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const colors = [
	{ name: "Red" },
	{ name: "Green" },
	{ name: "Blue" },
	{ name: "Yellow" },
	{ name: "Orange" },
	{ name: "Purple" },
];

const DefaultCombobox = (args) => {
	const [selected, setSelected] = useState(colors[0]);
	const [query, setQuery] = useState("");

	const filteredColors =
		query === ""
			? colors
			: colors.filter((color) =>
					color.name
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(query.toLowerCase().replace(/\s+/g, ""))
			  );
	return (
		<div className="mx-auto w-72 py-8">
			<Combobox value={selected} onChange={setSelected}>
				<div className="relative mt-1">
					<div className="relative w-full cursor-pointer overflow-hidden rounded-lg text-left shadow-md sm:text-sm">
						<Combobox.Input
							className="w-full border-none py-2 pl-3 pr-10 text-sm dark:bg-neutral-800 text-gray-900 dark:text-white"
							displayValue={(color) => color.name}
							onChange={(event) => setQuery(event.target.value)}
						/>
						<Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
							<SelectorIcon
								className="h-5 w-5 text-gray-400"
								aria-hidden="true"
							/>
						</Combobox.Button>
					</div>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery("")}
					>
						<Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-neutral-800 py-1 text-base shadow-lg sm:text-sm">
							{filteredColors.length === 0 && query !== "" ? (
								<div className="relative cursor-pointer select-none py-2 px-4 text-gray-700 dark:text-gray-300 text-sm">
									Nothing found.
								</div>
							) : (
								filteredColors.map((color) => (
									<Combobox.Option
										key={color.id}
										className={({ active }) =>
											`relative cursor-pointer select-none py-2 pl-10 pr-4 ${
												active
													? "bg-teal-600 text-white"
													: "text-gray-900 dark:text-white"
											}`
										}
										value={color}
									>
										{({ selected, active }) => (
											<>
												<span
													className={`block truncate text-sm ${
														selected ? "font-medium" : "font-normal"
													}`}
												>
													{color.name}
												</span>
												{selected ? (
													<span
														className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
															active ? "text-white" : "text-teal-600"
														}`}
													>
														<CheckIcon className="h-5 w-5" aria-hidden="true" />
													</span>
												) : null}
											</>
										)}
									</Combobox.Option>
								))
							)}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	);
};

Combobox.displayName = "Combobox";
Combobox.Input.displayName = "Combobox.Input";
Combobox.Button.displayName = "Combobox.Button";
Transition.displayName = "Transition";
Combobox.Options.displayName = "Combobox.Options";
Combobox.Option.displayName = "Combobox.Option";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultCombobox.bind({});
