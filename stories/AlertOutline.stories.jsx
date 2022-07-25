import React from "react";

import AlertOutline from "./components/AlertOutline";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Notifications/AlertOutline",
	component: AlertOutline,
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
const DefaultAlertOutline = (args) => <AlertOutline {...args} />;
const GreenAlertOutline = (args) => <AlertOutline.green {...args} />;
const YellowAlertOutline = (args) => <AlertOutline.yellow {...args} />;
const OrangeAlertOutline = (args) => <AlertOutline.orange {...args} />;
const RedAlertOutline = (args) => <AlertOutline.red {...args} />;
const PurpleAlertOutline = (args) => <AlertOutline.purple {...args} />;
const DarkAlertOutline = (args) => <AlertOutline.dark {...args} />;
const AlertsOutline = (args) => (
	<div>
		<AlertOutline {...args} />
		<AlertOutline.green {...args} />
		<AlertOutline.yellow {...args} />
		<AlertOutline.orange {...args} />
		<AlertOutline.red {...args} />
		<AlertOutline.purple {...args} />
		<AlertOutline.dark {...args} />
	</div>
);

AlertOutline.green.displayName = "AlertOutline.green";
AlertOutline.yellow.displayName = "AlertOutline.yellow";
AlertOutline.orange.displayName = "AlertOutline.orange";
AlertOutline.red.displayName = "AlertOutline.red";
AlertOutline.purple.displayName = "AlertOutline.purple";
AlertOutline.dark.displayName = "AlertOutline.dark";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const AllAlertOutline = AlertsOutline.bind({});
AllAlertOutline.args = {
	children: "Alert Outline Text",
};

export const DefaultOutline = DefaultAlertOutline.bind({});
DefaultOutline.args = {
	children: "Default Alert Outline",
	className: "font-bold mt-8",
	large: true,
	pills: false,
};

export const GreenOutline = GreenAlertOutline.bind({});
GreenOutline.args = {
	children: "Green Alert Outline",
};

export const YellowOutline = YellowAlertOutline.bind({});
YellowOutline.args = {
	children: "Yellow Alert Outline",
};

export const OrangeOutline = OrangeAlertOutline.bind({});
OrangeOutline.args = {
	children: "Orange Alert Outline",
};

export const RedOutline = RedAlertOutline.bind({});
RedOutline.args = {
	children: "Red Alert Outline",
};

export const PurpleOutline = PurpleAlertOutline.bind({});
PurpleOutline.args = {
	children: "Purple Alert Outline",
};

export const DarkOutline = DarkAlertOutline.bind({});
DarkOutline.args = {
	children: "Dark Alert Outline",
};
