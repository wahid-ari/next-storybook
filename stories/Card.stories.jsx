import React from "react";

import Card from "./components/Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Displays/Card",
	component: Card,
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
const DefaultCard = (args) => <Card {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultCard.bind({});
Default.args = {
	className: "mt-8 p-6 dark:text-white",
	children:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
};

export const Children = DefaultCard.bind({});
Children.args = {
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
