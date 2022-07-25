import React from "react";

import Toggle from "./components/Toggle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Utilities/Toggle",
	component: Toggle,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	// argTypes: {
	// 	className: { control: "className" },
	// },
	// argTypes: {
	// 	disabled: { control: "boolean" },
	// 	pills: { control: "boolean", options: [true, false] },
	// },
};

// Image.displayName = "Image";

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const DefaultToggle = (args) => <Toggle {...args} />;

export const Default = DefaultToggle.bind({});
export const ToggleColor = DefaultToggle.bind({});
ToggleColor.args = {
	className: "bg-red-500",
	large: true
}
