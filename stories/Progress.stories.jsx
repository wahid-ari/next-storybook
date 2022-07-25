import React from "react";

import Progress from "./components/Progress";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Loading/Progress",
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
const DefaultProgress = (args) => <Progress {...args} />;
const ProgressPercentage = (args) => <Progress.percentage {...args} />;
const ProgressAll = (args) => (
	<div>
		<Progress {...args} />
		<br />
		<Progress {...args} height="h-1.5" />
		<br />
		<Progress {...args} height="h-2" />
		<br />
		<Progress {...args} height="h-2.5" />
		<br />
		<Progress {...args} height="h-3" />
		<br />
		<Progress.percentage {...args} />
	</div>
);

Progress.percentage.displayName = "Progress.percentage";

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const AllProgress = ProgressAll.bind({});
AllProgress.args = {
	percent: "50",
};

export const Default = DefaultProgress.bind({});
Default.args = {
	percent: "50",
};

export const Height1_5 = DefaultProgress.bind({});
Height1_5.args = {
	height: "h-1.5",
	percent: "60",
};

export const Height2 = DefaultProgress.bind({});
Height2.args = {
	height: "h-2",
	percent: "70",
};

export const Height3 = DefaultProgress.bind({});
Height3.args = {
	height: "h-3",
	percent: "80",
};

export const Percentage = ProgressPercentage.bind({});
Percentage.args = {
	percent: "50",
};
