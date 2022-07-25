import React from "react";
import { useState } from "react";

import InputPassword from "./components/InputPassword";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Data Input/InputPassword",
	component: InputPassword,
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
const DefaultInputPassword = (args) => {
	const [value, setValue] = useState(args.value ?? "");
	return (
		<InputPassword
			{...args}
			onChange={(...params) => {
				args.onChange(...params);
				setValue(...params);
			}}
			value={value}
		/>
	);
};

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultInputPassword.bind({});
Default.args = {
	label: "Password",
	name: "password",
	placeholder: "Your Password",
};

export const DefaultValue = DefaultInputPassword.bind({});
DefaultValue.args = {
	label: "Default Password",
	name: "password",
	value: "DefaultPassword123",
};

export const DefaultNoLabel = DefaultInputPassword.bind({});
DefaultNoLabel.args = {
	name: "password",
	placeholder: "Input Password No Label",
};

export const Disabled = DefaultInputPassword.bind({});
Disabled.args = {
	name: "password",
	placeholder: "Input Password No Label",
	disabled: true,
};
