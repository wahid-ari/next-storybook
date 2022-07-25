import React from "react";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Headless UI/Disclosure",
	component: Disclosure,
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

const DefaultDisclosure = (args) => {
	return (
		<div className="w-full px-4 py-8">
			<div className="mx-auto w-full max-w-md rounded-2xl p-2 space-y-2">
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 dark:bg-neutral-800 px-4 py-2 text-left text-sm font-medium text-teal-600 hover:bg-green-200">
								<span>Open Disclosure</span>
								<ChevronUpIcon
									className={`${
										open ? "rotate-180 transform" : ""
									} h-5 w-5 text-teal-500`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 dark:text-gray-300">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
								eveniet perferendis nemo cum ad quam nostrum animi corrupti
								nobis dolores enim velit odit illum harum natus recusandae,
								iusto repellendus dicta.
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 dark:bg-neutral-800 px-4 py-2 text-left text-sm font-medium text-teal-600 hover:bg-green-200">
								<span>Open Disclosure</span>
								<ChevronUpIcon
									className={`${
										open ? "rotate-180 transform" : ""
									} h-5 w-5 text-teal-500`}
								/>
								{/* <svg
									xmlns="http://www.w3.org/2000/svg"
									className={`${
										open ? "rotate-180 transform" : ""
									} h-5 w-5 text-teal-600`}
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M5 15l7-7 7 7"
									/>
								</svg> */}
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 dark:text-gray-300">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
								eveniet perferendis nemo cum ad quam nostrum animi corrupti
								nobis dolores enim velit odit illum harum natus recusandae,
								iusto repellendus dicta.
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	);
};

Disclosure.displayName = "Disclosure";
Disclosure.Button.displayName = "Disclosure.Button";
Disclosure.Panel.displayName = "Disclosure.Panel";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultDisclosure.bind({});
