import React from "react";

import Snippet from "./components/Snippet";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Displays/Snippet",
	component: Snippet,
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
const DefaultSnippet = (args) => {
	return <Snippet {...args} />;
};

// Input.disabled.displayName = "Input.disabled";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultSnippet.bind({});
Default.args = {
	text: "yarn add @heroicons/react"
};

export const ClassName = DefaultSnippet.bind({});
ClassName.args = {
	className: "sm:w-96 my-4", 
	text: "yarn add react"
};
