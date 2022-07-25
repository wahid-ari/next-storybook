import React from "react";

import AlertCompact from "./components/AlertCompact";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Notifications/AlertCompact",
	component: AlertCompact,
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
const DefaultAlertCompact = (args) => <AlertCompact {...args} />;
const SuccessAlertCompact = (args) => <AlertCompact.success {...args} />;
const WarningAlertCompact = (args) => <AlertCompact.warning {...args} />;
const DangerAlertCompact = (args) => <AlertCompact.danger {...args} />;
const AlertsCompact = (args) => (
	<div className="grid sm:grid-cols-2 gap-4">
		<AlertCompact {...args} />
		<AlertCompact.success {...args} />
		<AlertCompact.warning {...args} />
		<AlertCompact.danger {...args} />
	</div>
);

AlertCompact.success.displayName = "AlertCompact.success";
AlertCompact.warning.displayName = "AlertCompact.warning";
AlertCompact.danger.displayName = "AlertCompact.danger";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const AllAlertCompact = AlertsCompact.bind({});
AllAlertCompact.args = {
	className: "text-sm",
	title: "Alert Compact Title",
	children: "Alert Compact Text",
};

export const DefaultCompact = DefaultAlertCompact.bind({});
DefaultCompact.args = {
	className: "text-sm mt-8",
	title: "Alert Compact Title",
	children: "Alert Compact Text",
};

export const SuccessCompact = SuccessAlertCompact.bind({});
SuccessCompact.args = {
	className: "text-sm",
	title: "Success Alert Compact Title",
	children: "Success Alert Compact Text",
};

export const WarningCompact = WarningAlertCompact.bind({});
WarningCompact.args = {
	className: "text-sm",
	title: "Warning Alert Compact Title",
	children: "Warning Alert Compact Text",
};

export const DangerCompact = DangerAlertCompact.bind({});
DangerCompact.args = {
	className: "text-sm",
	title: "Danger Alert Compact Title",
	children: "Danger Alert Compact Text",
};