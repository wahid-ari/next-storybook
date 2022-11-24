import React from "react";

import * as Select from "@radix-ui/react-select";
import cx from "classnames";
import Text from "./components/Text";
import {
	CheckIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from "@heroicons/react/outline";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Radix UI/Radix Select",
	component: Select,
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
const DefaultRadixSelect = (args) => {
	return (
		<>
			<Text className="mb-4">
				Displays a list of options for the user to pick from—triggered by a
				button.
			</Text>
			<Select.Root defaultValue="blueberry" className="relative">
				<Select.Trigger
					aria-label="Food"
					className="flex items-center px-3 py-1 bg-blue-500 hover:bg-blue-600 cursor-pointer transition-all text-white rounded focus:outline-none"
				>
					{/* <Button className="flex" > */}
					<Select.Value />
					<Select.Icon className="ml-1">
						<ChevronDownIcon className="w-4 h-5" />
					</Select.Icon>
					{/* </Button> */}
				</Select.Trigger>
				<Select.Content>
					<Select.ScrollUpButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
						<ChevronUpIcon className="w-5 h-5" />
					</Select.ScrollUpButton>
					<Select.Viewport className="bg-white dark:bg-neutral-800 p-2 rounded-lg shadow-lg">
						<Select.Group className="">
							{["Blueberry", "Strawberry", "Grapes"].map((item, Index) => (
								<Select.Item
									disabled={item === "Grapes"}
									key={`${item}-${Index}`}
									value={item.toLowerCase()}
									className={cx(
										"relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 font-medium focus:bg-gray-100 dark:focus:bg-neutral-900",
										"radix-disabled:opacity-50 radix-disabled:cursor-not-allowed",
										"focus:outline-none select-none cursor-pointer"
									)}
								>
									<Select.ItemText>{item}</Select.ItemText>
									<Select.ItemIndicator className="absolute left-2 inline-flex items-center">
										<CheckIcon className="w-5 h-5 text-green-600" />
									</Select.ItemIndicator>
								</Select.Item>
							))}
						</Select.Group>
					</Select.Viewport>
					<Select.ScrollDownButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
						<ChevronDownIcon className="w-5 h-5" />
					</Select.ScrollDownButton>
				</Select.Content>
			</Select.Root>
		</>
	);
};

Select.Root.displayName = "Select.Root";
// Tooltip.Root.displayName = "Tooltip.Root";
// Tooltip.Trigger.displayName = "Tooltip.Trigger";
// Tooltip.Portal.displayName = "Tooltip.Portal";
// Tooltip.Content.displayName = "Tooltip.Content";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultRadixSelect.bind({});
