import React from "react";

import * as ScrollArea from "@radix-ui/react-scroll-area";
import Text from "./components/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Radix UI/Radix ScrollArea",
	component: ScrollArea,
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
const DefaultRadixScrollArea = (args) => {
	return (
		<>
			<ScrollArea.Root className="h-[300px] w-[200px] overflow-hidden rounded ">
				<ScrollArea.Viewport className="w-full h-full bg-gray-100 dark:bg-neutral-800 px-4 py-2 ">
					<Text className="font-medium mb-2">Items</Text>
					<ul className="divide-y dark:divide-neutral-700 flex flex-col">
						{[
							1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
							20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
						].map((item) => {
							return (
								<li
									key={item}
									className="dark:text-gray-300 text-neutral-700 py-1.5"
								>
									Item - {item}
								</li>
							);
						})}
					</ul>
				</ScrollArea.Viewport>
				<ScrollArea.Scrollbar
					orientation="vertical"
					className="radix-orientation-vertical:w-2.5 p-0.5 flex-1 bg-gray-200 dark:bg-neutral-700"
				>
					<ScrollArea.Thumb className="rounded-full dark:bg-neutral-800 dark:hover:bg-neutral-900 bg-gray-300 hover:bg-gray-400" />
				</ScrollArea.Scrollbar>
				<ScrollArea.Corner />
			</ScrollArea.Root>
		</>
	);
};

const HorizontalRadixScrollArea = (args) => {
	return (
		<>
			<ScrollArea.Root className="sm:w-[400px] overflow-hidden rounded mt-8">
				<ScrollArea.Viewport className="w-full h-full bg-gray-100 dark:bg-neutral-800 px-4 pt-2 pb-6 ">
					<Text className="font-medium mb-2">Items</Text>
					<ul className="flex space-x-3">
						{[
							1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
							20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
						].map((item) => {
							return (
								<li
									key={item}
									className="dark:text-gray-300 text-neutral-700 truncate border-r dark:border-neutral-700 pr-3 last:border-0"
								>
									Item - {item}
								</li>
							);
						})}
					</ul>
				</ScrollArea.Viewport>
				<ScrollArea.Scrollbar
					orientation="horizontal"
					className="radix-orientation-horizontal:h-2.5 p-0.5 flex bg-gray-200 dark:bg-neutral-700"
				>
					<ScrollArea.Thumb className="rounded dark:bg-neutral-800 dark:hover:bg-neutral-900 bg-gray-300 hover:bg-gray-400" />
				</ScrollArea.Scrollbar>
				<ScrollArea.Corner />
			</ScrollArea.Root>
		</>
	);
};

ScrollArea.Root.displayName = "ScrollArea.Root";
// Tooltip.Root.displayName = "Tooltip.Root";
// Tooltip.Trigger.displayName = "Tooltip.Trigger";
// Tooltip.Portal.displayName = "Tooltip.Portal";
// Tooltip.Content.displayName = "Tooltip.Content";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultRadixScrollArea.bind({});
export const Horizontal = HorizontalRadixScrollArea.bind({});
