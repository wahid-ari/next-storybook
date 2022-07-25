import React from "react";

import Heading from "./components/Heading";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Texts/Heading",
	component: Heading,
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
const DefaultHeading = (args) => <Heading {...args} />;
const HeadingH2 = (args) => <Heading.h2 {...args} />;
const HeadingH3 = (args) => <Heading.h3 {...args} />;
const HeadingH4 = (args) => <Heading.h4 {...args} />;
const HeadingH5 = (args) => <Heading.h5 {...args} />;
const HeadingH6 = (args) => <Heading.h6 {...args} />;
const Headings = (args) => (
	<div>
		<Heading {...args} />
		<Heading.h2 {...args} />
		<Heading.h3 {...args} />
		<Heading.h4 {...args} />
		<Heading.h5 {...args} />
		<Heading.h6 {...args} />
	</div>
);

Heading.h2.displayName = "Heading.h2";
Heading.h3.displayName = "Heading.h3";
Heading.h4.displayName = "Heading.h4";
Heading.h5.displayName = "Heading.h5";
Heading.h6.displayName = "Heading.h6";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const AllHeading = Headings.bind({});
AllHeading.args = {
	children: "Heading Text",
};

export const Default = DefaultHeading.bind({});
Default.args = {
	children: "Default Heading",
};

export const Heading2 = HeadingH2.bind({});
Heading2.args = {
	children: "Heading H2",
};

export const Heading3 = HeadingH3.bind({});
Heading3.args = {
	children: "Heading H3",
};

export const Heading4 = HeadingH4.bind({});
Heading4.args = {
	children: "Heading H4",
};

export const Heading5 = HeadingH5.bind({});
Heading5.args = {
	children: "Heading H5",
};

export const Heading6 = HeadingH6.bind({});
Heading6.args = {
	children: "Heading H6",
};
