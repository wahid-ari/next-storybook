import React from "react";
import { useState } from "react";

import { Switch } from "@headlessui/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Headless UI/Switch (Toggle)",
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

const DefaultSwitch = (args) => {
	const [enabled, setEnabled] = useState(false);
	return (
		<div className="flex justify-center px-4 py-8">
			<Switch
				checked={enabled}
				onChange={setEnabled}
				className={`${
					enabled ? "!bg-teal-600" : "bg-gray-200 dark:bg-neutral-800"
				} relative inline-flex h-6 w-11 items-center rounded-full`}
			>
				<span className="sr-only">Enable notifications</span>
				<span
					className={`${
						enabled ? "translate-x-6" : "translate-x-1"
					} inline-block h-4 w-4 transform rounded-full bg-white`}
				/>
			</Switch>
		</div>
	);
};

Switch.displayName = "Switch";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultSwitch.bind({});
