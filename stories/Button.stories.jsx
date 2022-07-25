import React from "react";

import Button from "./components/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/Button",
	component: Button,
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
const DefaultButton = (args) => <Button {...args} />;
const SecondaryButton = (args) => <Button.secondary {...args} />;
const GreenButton = (args) => <Button.green {...args} />;
const YellowButton = (args) => <Button.yellow {...args} />;
const OrangeButton = (args) => <Button.orange {...args} />;
const RedButton = (args) => <Button.red {...args} />;
const PurpleButton = (args) => <Button.purple {...args} />;
const DarkButton = (args) => <Button.dark {...args} />;
const Buttons = (args) => (
	<div className="flex flex-wrap gap-4">
		<Button {...args} />
		<Button.secondary {...args} />
		<Button.green {...args} />
		<Button.yellow {...args} />
		<Button.orange {...args} />
		<Button.red {...args} />
		<Button.purple {...args} />
		<Button.dark {...args} />
	</div>
);

Button.secondary.displayName = "Button.secondary";
Button.green.displayName = "Button.green";
Button.yellow.displayName = "Button.yellow";
Button.orange.displayName = "Button.orange";
Button.red.displayName = "Button.red";
Button.purple.displayName = "Button.purple";
Button.dark.displayName = "Button.dark";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const AllButton = Buttons.bind({});
AllButton.args = {
	children: "Button",
};

export const Default = DefaultButton.bind({});
Default.args = {
	children: "Default",
	className: "font-bold mt-8",
	disabled: false,
	pills: false,
	type: "button",
	value: "button",
  onClick: () => alert("Button Clicked !")
};

export const Disabled = DefaultButton.bind({});
Disabled.args = {
	children: "Disabled",
	disabled: true,
	pills: false,
	type: "button",
	value: "button",
  onClick: () => alert("Button Cannot Clicked !")
};

export const Secondary = SecondaryButton.bind({});
Secondary.args = {
	children: "Secondary",
};

export const Green = GreenButton.bind({});
Green.args = {
	children: "Green",
};

export const Yellow = YellowButton.bind({});
Yellow.args = {
	children: "Yellow",
};

export const Orange = OrangeButton.bind({});
Orange.args = {
	children: "Orange",
};

export const Red = RedButton.bind({});
Red.args = {
	children: "Red",
};

export const Purple = PurpleButton.bind({});
Purple.args = {
	children: "Purple",
};

export const Dark = DarkButton.bind({});
Dark.args = {
	children: "Dark",
};
