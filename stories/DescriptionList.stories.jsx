import React from "react";

import DescriptionList from "./components/DescriptionList";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Displays/DescriptionList",
	component: DescriptionList,
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
const DefaultDescriptionList = (args) => {
	return (
		<DescriptionList divide={args.divide}>
			<DescriptionList.item title={args.title} text={args.text} />
			<DescriptionList.item title={args.title} text={args.text} />
		</DescriptionList>
	);
};

const DivideDescriptionList = (args) => {
	return (
		<DescriptionList divide={args.divide} className={args.className}>
			<DescriptionList.item title={args.title} text={args.text} />
			<DescriptionList.item title={args.title} text={args.text} />
		</DescriptionList>
	);
};

DescriptionList.item.displayName = "DescriptionList.item";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultDescriptionList.bind({});
Default.args = {
	title: "Lorem Ipsum",
	text: "Consequat commodo ullamco aliquip velit sint. Exercitation culpa aliqua ea cillum in minim ipsum non non aliqua tempor.",
};

export const Divide = DivideDescriptionList.bind({});
Divide.args = {
	divide: true,
	className: "my-3",
	title: "Lorem Ipsum",
	text: "Consequat commodo ullamco aliquip velit sint. Exercitation culpa aliqua ea cillum in minim ipsum non non aliqua tempor.",
};
