import React from "react";

import Loading from "./components/Loading";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Loading/Loading",
	component: Loading,
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
const DefaultLoading = (args) => <Loading {...args} />;
const GreenLoading = (args) => <Loading.green {...args} />;
const YellowLoading = (args) => <Loading.yellow {...args} />;
const OrangeLoading = (args) => <Loading.orange {...args} />;
const RedLoading = (args) => <Loading.red {...args} />;
const PurpleLoading = (args) => <Loading.purple {...args} />;
const DarkLoading = (args) => <Loading.dark {...args} />;
const Loadings = (args) => (
	<div className="flex gap-4">
		<Loading {...args} />
		<Loading.green {...args} />
		<Loading.yellow {...args} />
		<Loading.orange {...args} />
		<Loading.red {...args} />
		<Loading.purple {...args} />
		<Loading.dark {...args} />
	</div>
);

Loading.green.displayName = "Loading.green";
Loading.yellow.displayName = "Loading.yellow";
Loading.orange.displayName = "Loading.orange";
Loading.red.displayName = "Loading.red";
Loading.purple.displayName = "Loading.purple";
Loading.dark.displayName = "Loading.dark";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const AllLoading = Loadings.bind({});

export const Default = DefaultLoading.bind({});
Default.args = {
	className: "mt-8",
	large: true,
	pills: true,
};

export const Green = GreenLoading.bind({});
export const Yellow = YellowLoading.bind({});
export const Orange = OrangeLoading.bind({});
export const Red = RedLoading.bind({});
export const Purple = PurpleLoading.bind({});
export const Dark = DarkLoading.bind({});