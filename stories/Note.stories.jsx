import React from "react";

import Note from "./components/Note";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Displays/Note",
	component: Note,
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
const DefaultNote = (args) => <Note {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultNote.bind({});
Default.args = {
	className: "",
	title: "NOTE :",
	titleClassName: "",
	children: "This note details something important.",
};

export const StyleA = DefaultNote.bind({});
StyleA.args = {
	className: "",
	title: "INFO :",
	titleClassName: "!text-sky-500 !dark:text-sky-500",
	children: "This note details something important.",
};

export const StyleB = DefaultNote.bind({});
StyleB.args = {
	className: "my-4 !text-red-500 !dark:text-red-500",
	title: "DANGER :",
	titleClassName: "!text-red-500 !dark:text-red-500",
	children: "This note details something important.",
};
