import React from "react";

import { Tab } from "@headlessui/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Headless UI/Tab",
	component: Tab,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	// argTypes: {
	// 	className: { control: "className" },
	// },
	// argTypes: {
	// 	disabled: { control: "boolean" },
	// 	pills: { control: "boolean", options: [true, false] },
	// },
};

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const DefaultTabs = (args) => {
	return (
		<div className="w-full max-w-md px-2 mx-auto sm:px-0 py-8">
			<Tab.Group>
				<Tab.List className="flex space-x-1 rounded-xl">
					<Tab
						className={({ selected }) =>
							classNames(
								"w-full rounded-lg py-2.5 text-sm font-medium text-teal-700",
								selected
									? "!bg-teal-600 !text-white"
									: "!text-gray-600 dark:!text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all"
							)
						}
					>
						First
					</Tab>
					<Tab
						className={({ selected }) =>
							classNames(
								"w-full rounded-lg py-2.5 text-sm font-medium text-teal-700",
								selected
									? "!bg-teal-600 !text-white"
									: "!text-gray-600 dark:!text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all"
							)
						}
					>
						Second
					</Tab>
				</Tab.List>
				<Tab.Panels className="mt-2">
					<Tab.Panel className={classNames("rounded-xl dark:text-white p-3")}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
						tempore temporibus.
					</Tab.Panel>
					<Tab.Panel className={classNames("rounded-xl dark:text-white p-3")}>
						Doloremque quos fuga nisi cum impedit deleniti quis quae esse
						excepturi dicta voluptatum odio fugit magni laudantium soluta
						voluptatibus.
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
};

const SecondTabs = (args) => {
	return (
		<div className="w-full max-w-md px-2 mx-auto sm:px-0 py-8">
			<Tab.Group>
				<Tab.List className="flex space-x-2 rounded-xl">
					<Tab
						className={({ selected }) =>
							classNames(
								"rounded py-1.5 px-3 text-sm font-medium text-teal-700",
								selected
									? "!bg-teal-600 !text-white"
									: "!text-gray-600 dark:!text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all"
							)
						}
					>
						First
					</Tab>
					<Tab
						className={({ selected }) =>
							classNames(
								"rounded py-1.5 px-3 text-sm font-medium text-teal-700",
								selected
									? "!bg-teal-600 !text-white"
									: "!text-gray-600 dark:!text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all"
							)
						}
					>
						Second
					</Tab>
				</Tab.List>
				<Tab.Panels className="mt-2">
					<Tab.Panel className={classNames("rounded-xl dark:text-white p-3")}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
						tempore temporibus.
					</Tab.Panel>
					<Tab.Panel className={classNames("rounded-xl dark:text-white p-3")}>
						Doloremque quos fuga nisi cum impedit deleniti quis quae esse
						excepturi dicta voluptatum odio fugit magni laudantium soluta
						voluptatibus.
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
};

const ThirdTabs = (args) => {
	return (
		<div className="w-full max-w-md px-2 mx-auto sm:px-0 py-8">
			<Tab.Group>
				<Tab.List className="flex font-medium whitespace-nowrap border-b border-gray-200 dark:border-neutral-700">
					<div className="flex gap-x-6">
						<Tab
							className={({ selected }) =>
								classNames(
									"w-full py-2 text-sm font-medium -mb-[0.06rem] transition-all",
									"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
									"border-b-2 border-transparent hover:border-gray-500 dark:hover:border-gray-400",
									selected ? "!text-teal-600 border-b-2 !border-teal-600" : ""
								)
							}
						>
							First
						</Tab>
						<Tab
							className={({ selected }) =>
								classNames(
									"w-full py-2 text-sm font-medium -mb-[0.06rem] transition-all",
									"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
									"border-b-2 border-transparent hover:border-gray-500 dark:hover:border-gray-400",
									selected ? "!text-teal-600 border-b-2 !border-teal-600" : ""
								)
							}
						>
							Second
						</Tab>
					</div>
				</Tab.List>
				<Tab.Panels className="mt-2">
					<Tab.Panel className={classNames("rounded-xl dark:text-white p-3")}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
						tempore temporibus.
					</Tab.Panel>
					<Tab.Panel className={classNames("rounded-xl dark:text-white p-3")}>
						Doloremque quos fuga nisi cum impedit deleniti quis quae esse
						excepturi dicta voluptatum odio fugit magni laudantium soluta
						voluptatibus.
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
};

const FourthTabs = (args) => {
	return (
		<div className="w-full max-w-md px-2 mx-auto sm:px-0 py-8">
			<Tab.Group>
				<Tab.List className="flex space-x-2 font-medium whitespace-nowrap border-b border-gray-200 dark:border-neutral-700">
					<Tab
						className={({ selected }) =>
							classNames(
								"w-full py-2 text-sm font-medium -mb-[0.06rem] transition-all",
								"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
								"border-b-2 border-transparent hover:border-gray-500 dark:hover:border-gray-400",
								selected ? "!text-teal-600 border-b-2 !border-teal-600" : ""
							)
						}
					>
						First
					</Tab>
					<Tab
						className={({ selected }) =>
							classNames(
								"w-full py-2 text-sm font-medium -mb-[0.06rem] transition-all",
								"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
								"border-b-2 border-transparent hover:border-gray-500 dark:hover:border-gray-400",
								selected ? "!text-teal-600 border-b-2 !border-teal-600" : ""
							)
						}
					>
						Second
					</Tab>
				</Tab.List>
				<Tab.Panels className="mt-2">
					<Tab.Panel className={classNames("rounded-xl dark:text-white p-3")}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
						tempore temporibus.
					</Tab.Panel>
					<Tab.Panel className={classNames("rounded-xl dark:text-white p-3")}>
						Doloremque quos fuga nisi cum impedit deleniti quis quae esse
						excepturi dicta voluptatum odio fugit magni laudantium soluta
						voluptatibus.
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
};

const VerticalTabs = (args) => {
	return (
		<div className="pt-4 sm:px-0 sm:flex">
			<Tab.Group vertical>
				<Tab.List className="bg-gray-100 dark:bg-neutral-800 p-2 rounded font-medium">
					<Tab
						className={({ selected }) =>
							classNames(
								"w-full mb-2 py-1.5 text-sm font-medium text-dark-500 bg-gray-100 dark:bg-neutral-900 rounded transition-all",
								selected
									? "text-white !bg-teal-600"
									: "text-dark-500 dark:text-gray-200 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 hover:text-teal-600 dark:hover:text-teal-600"
							)
						}
					>
						First
					</Tab>
					<Tab
						className={({ selected }) =>
							classNames(
								"w-full mb-2 py-1.5 text-sm font-medium text-dark-500 bg-gray-100 dark:bg-neutral-900 rounded transition-all",
								selected
									? "text-white !bg-teal-600"
									: "text-dark-500 dark:text-gray-200 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 hover:text-teal-600 dark:hover:text-teal-600"
							)
						}
					>
						Second
					</Tab>
				</Tab.List>
				<Tab.Panels className="w-full">
					<Tab.Panel className="p-4 dark:text-white">
						Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion
						axe four dollar toast truffaut, direct trade kombucha brunch
						williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking
						vinegar tacos. Taxidermy bushwick celiac master cleanse microdosing
						seitan. Fashion axe four dollar toast truffaut, direct trade
						kombucha brunch williamsburg keffiyeh gastropub tousled squid meh
						taiyaki drinking vinegar tacos.
					</Tab.Panel>
					<Tab.Panel className="p-4 dark:text-white">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
						voluptas dolores accusantium rerum vel molestias nihil placeat,
						corrupti ea eligendi ullam, voluptate ut provident similique ipsam
						sapiente unde id distinctio.
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
};

const VerticalStyleTabs = (args) => {
	return (
		<div className="pt-4 sm:px-0 sm:flex">
			<Tab.Group vertical>
				<Tab.List className="p-2 rounded font-medium">
					<Tab
						className={({ selected }) =>
							classNames(
								"w-full mb-2 py-1.5 text-sm font-medium text-dark-500 dark:bg-neutral-900 rounded transition-all",
								selected
									? "text-white !bg-teal-600"
									: "text-dark-500 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-teal-600 dark:hover:text-teal-600"
							)
						}
					>
						First
					</Tab>
					<Tab
						className={({ selected }) =>
							classNames(
								"w-full mb-2 py-1.5 text-sm font-medium text-dark-500 dark:bg-neutral-900 rounded transition-all",
								selected
									? "text-white !bg-teal-600"
									: "text-dark-500 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-teal-600 dark:hover:text-teal-600"
							)
						}
					>
						Second
					</Tab>
				</Tab.List>
				<Tab.Panels className="w-full">
					<Tab.Panel className="p-4 dark:text-white">
						Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion
						axe four dollar toast truffaut, direct trade kombucha brunch
						williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking
						vinegar tacos. Taxidermy bushwick celiac master cleanse microdosing
						seitan. Fashion axe four dollar toast truffaut, direct trade
						kombucha brunch williamsburg keffiyeh gastropub tousled squid meh
						taiyaki drinking vinegar tacos.
					</Tab.Panel>
					<Tab.Panel className="p-4 dark:text-white">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
						voluptas dolores accusantium rerum vel molestias nihil placeat,
						corrupti ea eligendi ullam, voluptate ut provident similique ipsam
						sapiente unde id distinctio.
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
};

Tab.Group.displayName = "Tab.Group";
Tab.List.displayName = "Tab.List";
Tab.displayName = "Tab";
Tab.Panels.displayName = "Tab.Panels";
Tab.Panel.displayName = "Tab.Panel";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultTabs.bind({});
export const Second = SecondTabs.bind({});
export const Third = ThirdTabs.bind({});
export const Fourth = FourthTabs.bind({});
export const Vertical = VerticalTabs.bind({});
export const VerticalStyle = VerticalStyleTabs.bind({});
