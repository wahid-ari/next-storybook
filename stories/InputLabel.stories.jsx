import React from "react";
import { useState } from "react";

import InputLabel from "./components/InputLabel";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Data Input/InputLabel",
	component: InputLabel,
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
const DefaultInputLabel = (args) => {
	const [value, setValue] = useState(args.value ?? "");
	function handleChange(e) {
		setValue(e.target.value);
	}
	return <InputLabel {...args} onChange={handleChange} value={value} />;
};

const DisabledInputLabel = (args) => <InputLabel.disabled {...args} />;

// Input.disabled.displayName = "Input.disabled";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultInputLabel.bind({});
Default.args = {
	label: "Input Label Left",
	value: "www.google.com",
	labelLeft: "https://",
};

export const Disabled = DisabledInputLabel.bind({});
Disabled.args = {
	label: "Input Label Left Disabled",
	value: "www.google.com",
	labelLeft: "https://",
};

export const LabelRight = DefaultInputLabel.bind({});
LabelRight.args = {
	label: "Input Label Right",
	value: "google",
	labelRight: ".com",
};

export const DisabledLabelRight = DisabledInputLabel.bind({});
DisabledLabelRight.args = {
	label: "Input Label Right Disabled",
	value: "google",
	labelRight: ".com",
};