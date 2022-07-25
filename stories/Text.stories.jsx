import React from "react";

import Text from "./components/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Texts/Text",
	component: Text,
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
const DefaultText = (args) => <Text {...args} />;
const TextLight = (args) => <Text.light {...args} />;
const TextMedium = (args) => <Text.medium {...args} />;
const TextSemibold = (args) => <Text.semibold {...args} />;
const TextBold = (args) => <Text.bold {...args} />;
const TextExtrabold = (args) => <Text.extrabold {...args} />;
const Texts = (args) => (
	<div className="space-y-4">
		<Text {...args} />
		<Text.light {...args} />
		<Text.medium {...args} />
		<Text.semibold {...args} />
		<Text.bold {...args} />
		<Text.extrabold {...args} />
	</div>
);

Text.light.displayName = "Text.light";
Text.medium.displayName = "Text.medium";
Text.semibold.displayName = "Text.semibold";
Text.bold.displayName = "Text.bold";
Text.extrabold.displayName = "Text.extrabold";

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const AllText = Texts.bind({});
AllText.args = {
	children: "Paragraph Text",
};

export const Default = DefaultText.bind({});
Default.args = {
	children: "Default Paragraph Text",
};

export const Light = TextLight.bind({});
Light.args = {
	children: "Text Light",
};

export const Medium = TextMedium.bind({});
Medium.args = {
	children: "Text Medium",
};

export const Semibold = TextSemibold.bind({});
Semibold.args = {
	children: "Text Semibold",
};

export const Bold = TextBold.bind({});
Bold.args = {
	children: "Text Bold",
};

export const Extrabold = TextExtrabold.bind({});
Extrabold.args = {
	children: "Text Extrabold",
};
