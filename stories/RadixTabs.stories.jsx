import React from "react";

import * as Tabs from "@radix-ui/react-tabs";
import cx from "classnames";
import Text from "./components/Text"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Radix UI/Radix Tabs",
	component: Tabs,
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
const DefaultRadixTabs = (args) => {
	const tabs = [
		{
			title: "Inbox",
			value: "tab1",
		},
		{
			title: "Today",
			value: "tab2",
		},

		{
			title: "Upcoming",
			value: "tab3",
		},
	];
	return (
		<>
			<Text className="mb-4">
				A set of layered sections of content—known as tab panels—that are
				displayed one at a time.
			</Text>
			<Tabs.Root defaultValue="tab1">
				<Tabs.List className="flex space-x-5 max-w-sm">
					{tabs.map(({ title, value }) => (
						<Tabs.Trigger
							key={`tab-trigger-${value}`}
							value={value}
							className={cx(
								"group",
								"py-2 transition-all duration-200",
								"radix-state-active:border-b-2 radix-state-active:border-blue-500 radix-state-active:text-blue-500",
								"radix-state-inactive:border-b-2 radix-state-inactive:border-b-transparent",
								"radix-state-inactive:text-gray-600 dark:radix-state-inactive:text-gray-300",
								"radix-state-inactive:hover:text-blue-500 radix-state-inactive:dark:hover:text-blue-500"
							)}
						>
							<span className="text-sm font-medium">{title}</span>
						</Tabs.Trigger>
					))}
				</Tabs.List>
				{tabs.map(({ value }) => (
					<Tabs.Content
						key={`tab-content-${value}`}
						value={value}
						className="py-4 max-w-sm"
					>
						<span className="text-sm text-gray-700 dark:text-gray-100">
							{
								{
									tab1: "Laboris voluptate sunt labore et proident cupidatat voluptate eu officia aliquip est irure Lorem sit. Ad est irure non magna aliquip dolore esse.",
									tab2: "Non labore ullamco pariatur consectetur officia fugiat veniam proident laboris incididunt labore. Aliqua occaecat veniam eu commodo et et exercitation.",
									tab3: "Anim sunt cupidatat aliquip mollit aliqua cillum anim proident minim do ut quis quis proident. Ullamco occaecat anim pariatur Lorem irure cillum pariatur aute nostrud ut et nulla non sunt.",
								}[value]
							}
						</span>
					</Tabs.Content>
				))}
			</Tabs.Root>
		</>
	);
};

const OtherRadixTabs = (args) => {
	const tabs = [
		{
			title: "Inbox",
			value: "tab1",
		},
		{
			title: "Today",
			value: "tab2",
		},

		{
			title: "Upcoming",
			value: "tab3",
		},
	];
	return (
		<Tabs.Root defaultValue="tab1">
			<Tabs.List className="flex space-x-1 max-w-sm rounded bg-gray-100 dark:bg-neutral-800 p-1">
				{tabs.map(({ title, value }) => (
					<Tabs.Trigger
						key={`tab-trigger-${value}`}
						value={value}
						className={cx(
							"group",
							"rounded-md flex-1 px-3 py-1 transition-all duration-200",
							"radix-state-active:bg-white dark:radix-state-active:bg-neutral-900 radix-state-active:text-blue-500",
							"radix-state-inactive:hover:bg-white dark:radix-state-inactive:hover:bg-neutral-900",
							"radix-state-inactive:text-gray-600 dark:radix-state-inactive:text-gray-300"
						)}
					>
						<span className="text-sm font-medium">{title}</span>
					</Tabs.Trigger>
				))}
			</Tabs.List>
			{tabs.map(({ value }) => (
				<Tabs.Content
					key={`tab-content-${value}`}
					value={value}
					className="p-4"
				>
					<span className="text-sm text-gray-700 dark:text-gray-100">
						{
							{
								tab1: "Laboris voluptate sunt labore et proident cupidatat voluptate eu officia aliquip est irure Lorem sit.",
								tab2: "Non labore ullamco pariatur consectetur officia fugiat veniam proident laboris incididunt labore.",
								tab3: "Anim sunt cupidatat aliquip mollit aliqua cillum anim proident minim do ut quis quis proident.",
							}[value]
						}
					</span>
				</Tabs.Content>
			))}
		</Tabs.Root>
	);
}

Tabs.Root.displayName = "Tabs.Root";
// Tooltip.Root.displayName = "Tooltip.Root";
// Tooltip.Trigger.displayName = "Tooltip.Trigger";
// Tooltip.Portal.displayName = "Tooltip.Portal";
// Tooltip.Content.displayName = "Tooltip.Content";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultRadixTabs.bind({});
export const Other = OtherRadixTabs.bind({});
