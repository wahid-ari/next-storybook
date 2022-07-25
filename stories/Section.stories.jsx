import React from "react";

import Section from "./components/Section";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Displays/Section",
	component: Section,
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
const DefaultSection = (args) => <Section {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultSection.bind({});
Default.args = {
	id: "section",
	name: "Section",
	className: "mt-8 dark:text-white",
	children:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
};

export const Children = DefaultSection.bind({});
Children.args = {
	id: "section",
	name: "Section",
	className: "mt-2",
	children: (
		<p className="text-sm dark:text-white">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			Lorem Ipsum has been the industry standard dummy text ever since the
			1500s, when an unknown printer took a galley of type and scrambled it to
			make a type specimen book.
		</p>
	),
};