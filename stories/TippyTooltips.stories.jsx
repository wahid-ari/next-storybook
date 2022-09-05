import React from "react";

import Tippy from "@tippyjs/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Displays/TippyTooltips",
	component: Tippy,
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
const DefaultTippyTooltips = (args) => {
	return (
		<Tippy
			content={
				<span className="bg-white dark:bg-neutral-800 dark:text-white rounded text-sm px-2 py-1 shadow">
					{args.content}
				</span>
			}
		>
			<span className="dark:text-white hover:cursor-pointer font-medium">
				{args.title}
			</span>
		</Tippy>
	);
};

Tippy.displayName = "Tippy";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultTippyTooltips.bind({});
Default.args = {
	title: "Hover Me",
	content: "Tippy Tooltips Content"
};
