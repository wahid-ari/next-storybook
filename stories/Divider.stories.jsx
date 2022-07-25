import React from "react";

import Divider from "./components/Divider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Utilities/Divider",
	component: Divider,
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
const DefaultDivider = (args) => <Divider {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultDivider.bind({});
Default.args = {
	className: "mt-8",
};

export const CenterText = DefaultDivider.bind({});
CenterText.args = {
	className: "mt-4",
	center: true,
	text: "Text Center"
};

export const LeftText = DefaultDivider.bind({});
LeftText.args = {
	className: "mt-4",
	left: true,
	text: "Text Left"
};

export const RightText = DefaultDivider.bind({});
RightText.args = {
	className: "mt-4",
	right: true,
	text: "Text Right"
};
