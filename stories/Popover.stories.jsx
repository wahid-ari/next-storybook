import React from "react";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Headless UI/Popover",
	component: Popover,
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

function IconOne() {
	return (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="48" height="48" rx="8" fill="#ccfbf1" />
			<path
				d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
				stroke="#0D9488"
				strokeWidth="2"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
				stroke="#0D9"
				strokeWidth="2"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
				stroke="#0D9"
				strokeWidth="2"
			/>
		</svg>
	);
}

function IconTwo() {
	return (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="48" height="48" rx="8" fill="#ccfbf1" />
			<path
				d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
				stroke="#0D9488"
				strokeWidth="2"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
				stroke="#0D9"
				strokeWidth="2"
			/>
		</svg>
	);
}

const solutions = [
	{
		name: "Insights",
		description: "Measure actions your users take",
		href: "##",
		icon: IconOne,
	},
	{
		name: "Automations",
		description: "Create your own targeted content",
		href: "##",
		icon: IconTwo,
	},
];

const DefaultPopover = (args) => {
	return (
		<div className="w-full px-4 flex justify-center py-8">
			<Popover className="relative">
				{({ open }) => (
					<>
						<Popover.Button
							className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md bg-teal-600 px-3 py-2 text-sm font-medium text-white hover:text-opacity-100`}
						>
							<span>Popover</span>
							<ChevronDownIcon
								className={`${open ? "rotate-180 transform" : ""}
                  ml-2 h-5 w-5 text-white transition duration-150 ease-in-out`}
								aria-hidden="true"
							/>
						</Popover.Button>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
								<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
									<div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
										{solutions.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50"
											>
												<div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
													<item.icon aria-hidden="true" />
												</div>
												<div className="ml-4">
													<p className="text-sm font-medium text-gray-900">
														{item.name}
													</p>
													<p className="text-sm text-gray-500">
														{item.description}
													</p>
												</div>
											</a>
										))}
									</div>
									<div className="bg-gray-50 px-4 pb-4">
										<a
											href="##"
											className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100"
										>
											<span className="flex items-center">
												<span className="text-sm font-medium text-gray-900">
													Documentation
												</span>
											</span>
											<span className="block text-sm text-gray-500">
												Start integrating products and tools
											</span>
										</a>
									</div>
								</div>
							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover>
		</div>
	);
};

Popover.displayName = "Popover";
Transition.displayName = "Transition";
Popover.Button.displayName = "Popover.Button";
Popover.Panel.displayName = "Popover.Panel";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultPopover.bind({});
