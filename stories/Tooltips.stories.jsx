import { AnnotationIcon } from "@heroicons/react/outline";
import React from "react";

import Tooltips from "./components/Tooltips";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Displays/Tooltips",
	component: Tooltips,
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
const DefaultTooltips = (args) => (
	<div className="flex justify-center py-8">
		<Tooltips {...args}>
			<AnnotationIcon className="h-6 w-6 text-neutral-700 dark:text-gray-300"></AnnotationIcon>
		</Tooltips>
	</div>
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultTooltips.bind({});
Default.args = {
	text: "Tooltips Center",
};

export const Left = DefaultTooltips.bind({});
Left.args = {
	text: "Tooltips Left",
	left: true
};

export const Right = DefaultTooltips.bind({});
Right.args = {
	text: "Tooltips Right",
	right: true
};
