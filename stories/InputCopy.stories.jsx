import React from "react";
import { useState } from "react";

import InputCopy from "./components/InputCopy";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Data Input/InputCopy",
	component: InputCopy,
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
const DefaultInputCopy = (args) => {
	const [value, setValue] = useState(args.value ?? "");
	function handleChange(e) {
		setValue(e.target.value);
	}
	return <InputCopy {...args} onChange={handleChange} value={value} />;
};

const DisabledInputCopy = (args) => <InputCopy disabled {...args} />;

// Input.disabled.displayName = "Input.disabled";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultInputCopy.bind({});
Default.args = {
	label: "Input Copy",
	value: "Text to Copy",
};

export const Disabled = DisabledInputCopy.bind({});
Disabled.args = {
	label: "Input Copy Disabled",
	value: "Disabled Text to Copy",
};
