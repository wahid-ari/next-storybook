import React from "react";

import Container from "./components/Container";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Displays/Container",
	component: Container,
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
const DefaultContainer = (args) => <Container {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultContainer.bind({});
Default.args = {
	className: "mt-8 dark:text-white",
	children:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
};

export const Children = DefaultContainer.bind({});
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

export const Small = DefaultContainer.bind({});
Small.args = {
	className: "dark:text-white",
	small: true,
	children:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
};

export const Medium = DefaultContainer.bind({});
Medium.args = {
	className: "dark:text-white",
	medium: true,
	children:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
};

export const Large = DefaultContainer.bind({});
Large.args = {
	className: "dark:text-white",
	large: true,
	children:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
};
