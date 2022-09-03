import React from "react";

import ShowMore from "./components/ShowMore";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Displays/ShowMore",
	component: ShowMore,
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
const DefaultShowMore = (args) => <ShowMore {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultShowMore.bind({});
Default.args = {
	className: "mt-4",
	text: "SHOW MORE",
};