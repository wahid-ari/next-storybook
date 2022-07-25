import React from "react";
import { useState } from "react";

import Input from "./components/Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Data Input/Input",
	component: Input,
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
const DefaultInput = (args) => {
	const [value, setValue] = useState(args.value ?? "");
	return (
		<Input
			{...args}
			onChange={(...params) => {
				args.onChange(...params);
				setValue(...params);
			}}
			value={value}
		/>
	);
};

const DisabledInput = (args) => <Input.disabled {...args} />;

Input.disabled.displayName = "Input.disabled";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultInput.bind({});
Default.args = {
	label: "Input",
	type: "text",
	name: "name",
	placeholder: "Your Input",
};

export const DefaultValue = DefaultInput.bind({});
DefaultValue.args = {
	label: "Default Value",
	type: "text",
	name: "name",
	value: "Default Value",
};

export const DefaultNoLabel = DefaultInput.bind({});
DefaultNoLabel.args = {
	type: "text",
	name: "name",
	placeholder: "Input No Label",
};

export const Disabled = DisabledInput.bind({});
Disabled.args = {
	label: "Input Disabled",
	type: "text",
	name: "name",
};

export const DisabledValue = DisabledInput.bind({});
DisabledValue.args = {
	label: "Input Disabled",
	type: "text",
	name: "name",
	value: "Input Disabled",
};

export const DisabledNoLabel = DisabledInput.bind({});
DisabledNoLabel.args = {
	type: "text",
	name: "name",
	placeholder: "Disabled Input No Label",
};
