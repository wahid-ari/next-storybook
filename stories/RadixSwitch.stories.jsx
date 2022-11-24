import React, { useState } from "react";

import * as Switch from "@radix-ui/react-switch";
import cx from "classnames";
import Text from "./components/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Radix UI/Radix Switch",
	component: Switch,
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
const DefaultRadixSwitch = (args) => {
	const [switchValue, setSwitchValue] = useState(false);
	return (
		<>
			<Text className="mb-2">{switchValue ? "On" : "Off"}</Text>
			<Switch.Root
				onCheckedChange={(e) => setSwitchValue(e)}
				checked={switchValue}
				className={cx(
					"group",
					"radix-state-checked:bg-blue-600",
					"radix-state-unchecked:bg-gray-200 dark:radix-state-unchecked:bg-neutral-800",
					"relative inline-flex h-[24px] w-[44px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
					"focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
				)}
			>
				<Switch.Thumb
					className={cx(
						"group-radix-state-checked:translate-x-5",
						"group-radix-state-unchecked:translate-x-0",
						"pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
					)}
				/>
			</Switch.Root>
		</>
	);
};

Switch.Root.displayName = "Switch.Root";
// Tooltip.Root.displayName = "Tooltip.Root";
// Tooltip.Trigger.displayName = "Tooltip.Trigger";
// Tooltip.Portal.displayName = "Tooltip.Portal";
// Tooltip.Content.displayName = "Tooltip.Content";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultRadixSwitch.bind({});
