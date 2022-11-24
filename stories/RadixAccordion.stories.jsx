import React from "react";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@heroicons/react/outline";
import cx from "classnames";
import Text from "./components/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Radix UI/Radix Accordion",
	component: Accordion,
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
const DefaultRadixAccordion = (args) => {
	const items = [
		{
			header: "What is Radix UI?",
			content:
				"Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience. You can use these components either as the base layer of your design system, or adopt them incrementally.",
		},
		{
			header:
				"Each primitive can be installed individually so you we adopt them incrementally?",
			content: "Yes!",
		},
		{
			header: "Is it accessible?",
			content: "Yes!",
		},
	];
	return (
		<>
			<Text className="mb-4">A vertically stacked set of interactive headings that each reveal an associated section of content.</Text>
			<Accordion.Root
				type="single"
				defaultValue="item-1"
				collapsible
				className={cx("space-y-4")}
			>
				{items.map(({ header, content }, i) => (
					<Accordion.Item
						key={`header-${i}`}
						value={`item-${i + 1}`}
						className="rounded-lg focus-within:ring focus-within:ring-blue-500 focus-within:ring-opacity-75 focus:outline-none"
					>
						<Accordion.Header className="w-full">
							<Accordion.Trigger
								className={cx(
									"group",
									"radix-state-open:rounded-t-lg radix-state-closed:rounded-lg",
									"focus:outline-none",
									"inline-flex w-full items-center justify-between bg-gray-100 px-4 py-2 text-left dark:bg-neutral-800"
								)}
							>
								<span className="text-sm font-medium text-gray-900 dark:text-gray-100">
									{header}
								</span>
								<ChevronDownIcon
									className={cx(
										"ml-2 h-5 w-5 shrink-0 text-gray-700 ease-in-out dark:text-gray-400",
										"group-radix-state-open:rotate-180 group-radix-state-open:duration-300"
									)}
								/>
							</Accordion.Trigger>
						</Accordion.Header>
						<Accordion.Content className="pt-2 w-full rounded-b-lg bg-white px-4 pb-3 dark:bg-neutral-900">
							<div className="text-sm text-gray-700 dark:text-gray-400">
								{content}
							</div>
						</Accordion.Content>
					</Accordion.Item>
				))}
			</Accordion.Root>
		</>
	);
};

Accordion.Root.displayName = "Accordion.Root";
// Tooltip.Root.displayName = "Tooltip.Root";
// Tooltip.Trigger.displayName = "Tooltip.Trigger";
// Tooltip.Portal.displayName = "Tooltip.Portal";
// Tooltip.Content.displayName = "Tooltip.Content";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultRadixAccordion.bind({});
