import React from "react";

import ProgressCircle from "./components/ProgressCircle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Loading/ProgressCircle",
	component: ProgressCircle,
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
const DefaultProgressCircle = (args) => {
	return <ProgressCircle {...args} />;
};

const SmallProgressCircle = (args) => {
	return <ProgressCircle.small {...args} />;
};

ProgressCircle.small.displayName = "ProgressCircle.small";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultProgressCircle.bind({});
Default.args = {
	size: 30,
	percent: 75,
	strokeWidth: 7,
	showPercent: true,
	textClassName: "font-medium",
};

export const Small = SmallProgressCircle.bind({});
Small.args = {
	size: 20,
	percent: 75,
	strokeWidth: 4,
	showPercent: true,
	color: "text-green-500", 
	textClassName: "font-medium !text-green-500"
};
