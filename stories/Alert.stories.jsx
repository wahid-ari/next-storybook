import React from "react";

import Alert from "./components/Alert";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Notifications/Alert",
	component: Alert,
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
const DefaultAlert = (args) => <Alert {...args} />;
const GreenAlert = (args) => <Alert.green {...args} />;
const YellowAlert = (args) => <Alert.yellow {...args} />;
const OrangeAlert = (args) => <Alert.orange {...args} />;
const RedAlert = (args) => <Alert.red {...args} />;
const PurpleAlert = (args) => <Alert.purple {...args} />;
const DarkAlert = (args) => <Alert.dark {...args} />;
const Alerts = (args) => (
	<div>
		<Alert {...args} />
		<Alert.green {...args} />
		<Alert.yellow {...args} />
		<Alert.orange {...args} />
		<Alert.red {...args} />
		<Alert.purple {...args} />
		<Alert.dark {...args} />
	</div>
);

Alert.green.displayName = "Alert.green";
Alert.yellow.displayName = "Alert.yellow";
Alert.orange.displayName = "Alert.orange";
Alert.red.displayName = "Alert.red";
Alert.purple.displayName = "Alert.purple";
Alert.dark.displayName = "Alert.dark";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const AllAlert = Alerts.bind({});
AllAlert.args = {
	children: "Alert Text",
};

export const Default = DefaultAlert.bind({});
Default.args = {
	children: "Default Alert",
	className: "font-bold mt-8",
	large: true,
	pills: false,
};

export const Green = GreenAlert.bind({});
Green.args = {
	children: "Green Alert",
};

export const Yellow = YellowAlert.bind({});
Yellow.args = {
	children: "Yellow Alert",
};

export const Orange = OrangeAlert.bind({});
Orange.args = {
	children: "Orange Alert",
};

export const Red = RedAlert.bind({});
Red.args = {
	children: "Red Alert",
};

export const Purple = PurpleAlert.bind({});
Purple.args = {
	children: "Purple Alert",
};

export const Dark = DarkAlert.bind({});
Dark.args = {
	children: "Dark Alert",
};
