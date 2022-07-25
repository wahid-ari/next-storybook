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
const InfoLeftAlertCompact = (args) => <AlertCompact.infoLeft {...args} />;
const SuccessLeftAlertCompact = (args) => <AlertCompact.successLeft {...args} />;
const WarningLeftAlertCompact = (args) => <AlertCompact.warningLeft {...args} />;
const DangerLeftAlertCompact = (args) => <AlertCompact.dangerLeft {...args} />;
const AlertsCompact = (args) => (
	<div className="grid sm:grid-cols-2 gap-4">
		<AlertCompact {...args} />
		<AlertCompact.success {...args} />
		<AlertCompact.warning {...args} />
		<AlertCompact.danger {...args} />
		<AlertCompact.infoLeft {...args} />
		<AlertCompact.successLeft {...args} />
		<AlertCompact.warningLeft {...args} />
		<AlertCompact.dangerLeft {...args} />
	</div>
);

AlertCompact.success.displayName = "AlertCompact.success";
AlertCompact.warning.displayName = "AlertCompact.warning";
AlertCompact.danger.displayName = "AlertCompact.danger";
AlertCompact.infoLeft.displayName = "AlertCompact.infoLeft";
AlertCompact.successLeft.displayName = "AlertCompact.successLeft";
AlertCompact.warningLeft.displayName = "AlertCompact.warningLeft";
AlertCompact.dangerLeft.displayName = "AlertCompact.dangerLeft";

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

export const InfoLeftCompact = InfoLeftAlertCompact.bind({});
InfoLeftCompact.args = {
	className: "text-sm",
	title: "Info Left Alert Compact Title",
	children: "Info Left Alert Compact Text",
};

export const SuccessLeftCompact = SuccessLeftAlertCompact.bind({});
SuccessLeftCompact.args = {
	className: "text-sm",
	title: "Success Left Alert Compact Title",
	children: "Success Left Alert Compact Text",
};

export const WarningLeftCompact = WarningLeftAlertCompact.bind({});
WarningLeftCompact.args = {
	className: "text-sm",
	title: "Warning Left Alert Compact Title",
	children: "Warning Left Alert Compact Text",
};

export const DangerLeftCompact = DangerLeftAlertCompact.bind({});
DangerLeftCompact.args = {
	className: "text-sm",
	title: "Danger Left Alert Compact Title",
	children: "Danger Left Alert Compact Text",
};
