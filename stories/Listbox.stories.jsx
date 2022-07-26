import React from "react";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Headless UI/Listbox (Select)",
	component: Listbox,
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

const DefaultListbox = (args) => {
	const [selected, setSelected] = useState(colors[0]);
	return (
		<div className="mx-auto w-72 py-8">
			<Listbox value={selected} onChange={setSelected}>
				<div className="relative mt-1">
					<Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white dark:bg-neutral-800 dark:text-white py-2 pl-3 pr-10 text-left shadow-md sm:text-sm">
						<span className="block truncate text-sm">{selected.name}</span>
						<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
							<SelectorIcon
								className="h-5 w-5 text-gray-400"
								aria-hidden="true"
							/>
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-neutral-800 py-1 text-base shadow-lg sm:text-sm">
							{colors.map((color, colorIdx) => (
								<Listbox.Option
									key={colorIdx}
									className={({ active }) =>
										`relative cursor-pointer select-none py-2 pl-10 pr-4 ${
											active ? "bg-green-100 text-teal-700" : "text-gray-900 dark:text-white"
										}`
									}
									value={color}
								>
									{({ selected }) => (
										<>
											<span
												className={`block truncate text-sm ${
													selected ? "font-medium" : "font-normal"
												}`}
											>
												{color.name}
											</span>
											{selected ? (
												<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-teal-600">
													<CheckIcon className="h-5 w-5" aria-hidden="true" />
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
};

Listbox.displayName = "Listbox";
Listbox.Button.displayName = "Listbox.Button";
Transition.displayName = "Transition";
Listbox.Options.displayName = "Listbox.Options";
Listbox.Option.displayName = "Listbox.Option";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultListbox.bind({});
