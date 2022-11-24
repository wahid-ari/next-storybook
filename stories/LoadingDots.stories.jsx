import React from "react";

import LoadingDots from "./components/LoadingDots";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Loading/LoadingDots",
	component: LoadingDots,
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
const DefaultLoadingDots = (args) => <LoadingDots {...args} />;
const MediumLoadingDots = (args) => <LoadingDots medium {...args} />;
const LargeLoadingDots = (args) => <LoadingDots large {...args} />;
const LoadingDotss = (args) => (
	<div className="flex flex-col gap-4">
		<LoadingDots {...args} />
		<LoadingDots medium {...args} />
		<LoadingDots large {...args} />
	</div>
);

// LoadingDots.green.displayName = "LoadingDots.green";
// LoadingDots.yellow.displayName = "LoadingDots.yellow";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const AllLoadingDots = LoadingDotss.bind({});

export const Default = DefaultLoadingDots.bind({});
Default.args = {
	className: "mt-8"
};

export const Medium = MediumLoadingDots.bind({});
export const Large = LargeLoadingDots.bind({});