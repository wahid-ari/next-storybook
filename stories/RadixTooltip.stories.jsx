import React from "react";

import * as Tooltip from "@radix-ui/react-tooltip";
import Button from "./components/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Radix UI/Radix Tooltip",
	component: Tooltip,
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
const DefaultTooltip = (args) => {
	return (
		<Tooltip.Provider>
			<Tooltip.Root>
				<Tooltip.Trigger>
					<Button className="mt-8">Tooltip</Button>
				</Tooltip.Trigger>
				<Tooltip.Portal>
					<Tooltip.Content className="bg-gray-100 dark:bg-neutral-800 dark:text-white text-sm px-2 py-1 rounded mb-1.5">
						Tooltip Content
						{/* <div className="absolute w-3 h-3 mt-6 bottom-0.5 left-1/2 transform -translate-x-1/2 rotate-45 dark:bg-neutral-700 bg-gray-200 -z-10 rounded-sm" /> */}
					</Tooltip.Content>
				</Tooltip.Portal>
			</Tooltip.Root>
		</Tooltip.Provider>
	);
};

Tooltip.Provider.displayName = "Tooltip.Provider";
Tooltip.Root.displayName = "Tooltip.Root";
Tooltip.Trigger.displayName = "Tooltip.Trigger";
Tooltip.Portal.displayName = "Tooltip.Portal";
Tooltip.Content.displayName = "Tooltip.Content";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultTooltip.bind({});
