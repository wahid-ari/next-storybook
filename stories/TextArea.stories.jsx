import React from "react";
import { useState } from "react";

import TextArea from "./components/TextArea";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Data Input/TextArea",
	component: TextArea,
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
const DefaultTextArea = (args) => {
	const [value, setValue] = useState(args.value ?? "");
	return (
		<TextArea
			{...args}
			onChange={(...params) => {
				args.onChange(...params);
				setValue(...params);
			}}
			value={value}
		/>
	);
};

const DisabledTextArea = (args) => <TextArea.disabled {...args} />;

TextArea.disabled.displayName = "TextArea.disabled";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultTextArea.bind({});
Default.args = {
	label: "Text Area",
	name: "textarea",
	placeholder: "Your Text Area",
};

export const DefaultValue = DefaultTextArea.bind({});
DefaultValue.args = {
	label: "Text Area Default Value",
	name: "textareadefaultvalue",
	value: "Text Area Default Value",
};

export const DefaultNoLabel = DefaultTextArea.bind({});
DefaultNoLabel.args = {
	name: "textareadefaultnolabel",
	placeholder: "Text Area Default No Label",
};

export const Disabled = DisabledTextArea.bind({});
Disabled.args = {
	label: "Text Area Disabled",
	name: "textareadisabled",
};

export const DisabledValue = DisabledTextArea.bind({});
DisabledValue.args = {
	label: "Text Area Disabled Default Value",
	name: "textareadisableddefaultvalue",
	value: "Text Area Disabled Default Value",
};

export const DisabledNoLabel = DisabledTextArea.bind({});
DisabledNoLabel.args = {
	name: "textareadisablednolabel",
	placeholder: "Text Area Disabled No Label",
};
