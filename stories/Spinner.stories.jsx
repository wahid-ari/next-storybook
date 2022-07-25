import React from "react";

import Spinner from "./components/Spinner";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Loading/Spinner",
	component: Spinner,
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
const DefaultSpinner = (args) => <Spinner {...args} />;
const GreenSpinner = (args) => <Spinner.green {...args} />;
const YellowSpinner = (args) => <Spinner.yellow {...args} />;
const OrangeSpinner = (args) => <Spinner.orange {...args} />;
const RedSpinner = (args) => <Spinner.red {...args} />;
const PurpleSpinner = (args) => <Spinner.purple {...args} />;
const DarkSpinner = (args) => <Spinner.dark {...args} />;
const Spinners = (args) => (
	<div className="flex gap-4">
		<Spinner {...args} />
		<Spinner.green {...args} />
		<Spinner.yellow {...args} />
		<Spinner.orange {...args} />
		<Spinner.red {...args} />
		<Spinner.purple {...args} />
		<Spinner.dark {...args} />
	</div>
);

Spinner.green.displayName = "Spinner.green";
Spinner.yellow.displayName = "Spinner.yellow";
Spinner.orange.displayName = "Spinner.orange";
Spinner.red.displayName = "Spinner.red";
Spinner.purple.displayName = "Spinner.purple";
Spinner.dark.displayName = "Spinner.dark";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const AllSpinner = Spinners.bind({});

export const Default = DefaultSpinner.bind({});
Default.args = {
	className: "mt-8",
	large: true,
	pills: true,
};

export const Green = GreenSpinner.bind({});
export const Yellow = YellowSpinner.bind({});
export const Orange = OrangeSpinner.bind({});
export const Red = RedSpinner.bind({});
export const Purple = PurpleSpinner.bind({});
export const Dark = DarkSpinner.bind({});