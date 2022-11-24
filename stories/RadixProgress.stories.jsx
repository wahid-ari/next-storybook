import React, { useState } from "react";

import * as Progress from "@radix-ui/react-progress";
import Text from "./components/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Radix UI/Radix Progress",
	component: Progress,
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
const DefaultRadixProgress = (args) => {
	const [progress, setProgress] = useState(args.progress);
	return (
		<>
			<Text className="mb-4">Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.</Text>
			<Progress.Root
				value={progress}
				className="h-2 max-w-sm overflow-hidden rounded-full bg-gray-100 dark:bg-neutral-800"
			>
				<Progress.Indicator
					style={{ width: `${progress}%` }}
					className="h-full bg-blue-500 duration-300 ease-in-out"
				/>
			</Progress.Root>
		</>
	);
};

Progress.Root.displayName = "Progress.Root";
// Tooltip.Root.displayName = "Tooltip.Root";
// Tooltip.Trigger.displayName = "Tooltip.Trigger";
// Tooltip.Portal.displayName = "Tooltip.Portal";
// Tooltip.Content.displayName = "Tooltip.Content";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultRadixProgress.bind({});
Default.args = {
	progress: 50,
};
