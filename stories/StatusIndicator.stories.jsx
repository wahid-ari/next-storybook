import React from "react";

import StatusIndicator from "./components/StatusIndicator";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Displays/StatusIndicator",
	component: StatusIndicator,
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
const AllStatusIndicator = (args) => {
	return (
		<>
			<StatusIndicator success {...args} />
			<StatusIndicator warning {...args} />
			<StatusIndicator danger {...args} />
			<StatusIndicator {...args} />
		</>
	);
};

const DefaultStatusIndicator = (args) => {
	return <StatusIndicator {...args} />;
};

const SuccessStatusIndicator = (args) => {
	return <StatusIndicator {...args} />;
};

const DangerStatusIndicator = (args) => {
	return <StatusIndicator {...args} />;
};

const WarningStatusIndicator = (args) => {
	return <StatusIndicator {...args} />;
};

// Input.disabled.displayName = "Input.disabled";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const All = AllStatusIndicator.bind({});
All.args = {
	text: "Status Indicator",
};

export const Default = DefaultStatusIndicator.bind({});
Default.args = {
	text: "Default",
};

export const Success = SuccessStatusIndicator.bind({});
Success.args = {
	text: "Success",
	success: true,
};

export const Danger = DangerStatusIndicator.bind({});
Danger.args = {
	text: "Danger",
	danger: true,
};

export const Warning = WarningStatusIndicator.bind({});
Warning.args = {
	text: "Warning",
	warning: true,
};
