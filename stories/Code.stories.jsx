import React from "react";

import Code from "./components/Code";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Utilities/Code Highlight",
	component: Code,
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
const CustomCode = (args) => <Code {...args} />;
const DefaultCode = (args) => (
	<Code
		{...args}
		code={`import { useState } from "react";
import TextArea from "@components/TextArea";
import Text from "@components/Text";

const [textArea, setTextArea] = useState()

function handleTextAreaChange(e) {
	setTextArea(e.target.value);
};

<TextArea
	label="Text Area with Label"
	id="textareawithlabel"
	name="textareawithlabel"
	height={2}
	placeholder="Text Area With Label"
	onChange={handleTextAreaChange}
/>

<Text className="mb-4 text-sm font-medium !text-red-500"> Text Area : {textArea ? textArea : ""} </Text>`}
	/>
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultCode.bind({});
Default.args = {
	className: "text-sm",
};

export const Custom = CustomCode.bind({});
Custom.args = {
	className: "text-sm",
	code: `let a = 1;
let b = 2;

let c = a + b;

console.log(c);`,
};
