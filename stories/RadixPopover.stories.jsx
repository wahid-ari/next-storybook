import React from "react";

import * as Popover from "@radix-ui/react-popover";
import cx from "classnames";
import { XIcon } from "@heroicons/react/outline";
import Text from "./components/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Radix UI/Radix Popover",
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
const DefaultRadixPopover = (args) => {
	return (
		<>
			<Text className="mb-4">Displays rich content in a portal, triggered by a button.</Text>
			<Popover.Root>
				<Popover.Trigger asChild>
					<button className="flex items-center px-2 py-1 bg-blue-500 hover:bg-blue-600 cursor-pointer transition-all text-white rounded focus:outline-none">
						Open Popover
					</button>
				</Popover.Trigger>
				<Popover.Content
					align="center"
					sideOffset={4}
					className={cx(
						"z-50 radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
						"w-48 rounded-lg p-4 shadow-md md:w-56",
						"bg-white dark:bg-neutral-800"
					)}
				>
					<Popover.Arrow className="fill-current text-white dark:text-neutral-800" />
					<h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
						Dimensions
					</h3>

					<form className="mt-4 space-y-2">
						<fieldset key={`popover-items-width`} className="flex items-center">
							<label
								htmlFor="width"
								className="shrink-0 grow text-xs font-medium text-gray-700 dark:text-gray-400"
							>
								Width
							</label>
							<input
								id="width"
								type="text"
								defaultValue={"100%"}
								autoComplete="given-name"
								className={cx(
									"block w-1/2 rounded-md",
									"text-xs text-gray-700 placeholder:text-gray-500 dark:text-gray-400 dark:placeholder:text-gray-600",
									"border border-gray-400 focus-visible:border-transparent dark:border-gray-700 dark:bg-neutral-800",
									"focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
								)}
							/>
						</fieldset>
					</form>

					<Popover.Close
						className={cx(
							"absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
							"focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
						)}
					>
						<XIcon className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
					</Popover.Close>
				</Popover.Content>
			</Popover.Root>
		</>
	);
};

Popover.Root.displayName = "Popover.Root";
// Tooltip.Root.displayName = "Tooltip.Root";
// Tooltip.Trigger.displayName = "Tooltip.Trigger";
// Tooltip.Portal.displayName = "Tooltip.Portal";
// Tooltip.Content.displayName = "Tooltip.Content";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultRadixPopover.bind({});