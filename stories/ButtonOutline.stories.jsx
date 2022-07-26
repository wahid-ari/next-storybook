import React from "react";

import ButtonOutline from "./components/ButtonOutline";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/ButtonOutline",
	component: ButtonOutline,
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
const DefaultButtonOutline = (args) => <ButtonOutline {...args} />;
const GreenButtonOutline = (args) => <ButtonOutline.green {...args} />;
const YellowButtonOutline = (args) => <ButtonOutline.yellow {...args} />;
const OrangeButtonOutline = (args) => <ButtonOutline.orange {...args} />;
const RedButtonOutline = (args) => <ButtonOutline.red {...args} />;
const PurpleButtonOutline = (args) => <ButtonOutline.purple {...args} />;
const DarkButtonOutline = (args) => <ButtonOutline.dark {...args} />;
const ButtonsOutline = (args) => (
	<div className="flex flex-wrap gap-4">
		<ButtonOutline {...args} />
		<ButtonOutline.green {...args} />
		<ButtonOutline.yellow {...args} />
		<ButtonOutline.orange {...args} />
		<ButtonOutline.red {...args} />
		<ButtonOutline.purple {...args} />
		<ButtonOutline.dark {...args} />
	</div>
);

ButtonOutline.green.displayName = "ButtonOutline.green";
ButtonOutline.yellow.displayName = "ButtonOutline.yellow";
ButtonOutline.orange.displayName = "ButtonOutline.orange";
ButtonOutline.red.displayName = "ButtonOutline.red";
ButtonOutline.purple.displayName = "ButtonOutline.purple";
ButtonOutline.dark.displayName = "ButtonOutline.dark";

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const AllButtonOutline = ButtonsOutline.bind({});
AllButtonOutline.args = {
	children: "Button Outline",
};

export const DefaultOutline = DefaultButtonOutline.bind({});
DefaultOutline.args = {
	children: "Default",
	className: "font-bold mt-8",
	disabled: false,
	pills: false,
	type: "button",
	value: "button",
  onClick: () => alert("Button Clicked !")
};

export const DisabledOutline = DefaultButtonOutline.bind({});
DisabledOutline.args = {
	children: "Disabled",
	disabled: true,
	pills: false,
	type: "button",
	value: "button",
  onClick: () => alert("Button Cannot Clicked !")
};

export const GreenOutline = GreenButtonOutline.bind({});
GreenOutline.args = {
	children: "Green",
};

export const YellowOutline = YellowButtonOutline.bind({});
YellowOutline.args = {
	children: "Yellow",
};

export const OrangeOutline = OrangeButtonOutline.bind({});
OrangeOutline.args = {
	children: "Orange",
};

export const RedOutline = RedButtonOutline.bind({});
RedOutline.args = {
	children: "Red",
};

export const PurpleOutline = PurpleButtonOutline.bind({});
PurpleOutline.args = {
	children: "Purple",
};

export const DarkOutline = DarkButtonOutline.bind({});
DarkOutline.args = {
	children: "Dark",
};
