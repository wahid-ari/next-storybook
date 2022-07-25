import React from "react";

import Skeletons from "./components/Skeletons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Loading/Skeletons",
	component: Skeletons,
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
const DefaultSkeletons = (args) => <Skeletons {...args} />;
const SkeletonsStyleA = (args) => (
	<div className="flex items-center gap-4">
		<Skeletons {...args} className="!h-16 sm:!h-24 !w-16 sm:!w-24" />
		<div className="p-2">
			<Skeletons {...args} className="!h-6 !w-48" />
			<Skeletons {...args} className="!h-6 !w-32" />
		</div>
	</div>
);
const SkeletonsStyleB = (args) => (
	<div>
		<Skeletons {...args} className="!h-56 md:!h-52 !w-64" />
		<div className="p-3 flex gap-6">
			<Skeletons {...args} className="!w-16 !h-16 !rounded-full" />
			<div>
				<Skeletons {...args} className="!h-6" />
				<Skeletons {...args} className="!h-6 !w-32" />
			</div>
		</div>
	</div>
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultSkeletons.bind({});
Default.args = {
	className: "mt-8",
};

export const StyleA = SkeletonsStyleA.bind({});
export const StyleB = SkeletonsStyleB.bind({});

export const Square = DefaultSkeletons.bind({});
Square.args = {
	className: "!w-48 h-48",
};

export const Circle = DefaultSkeletons.bind({});
Circle.args = {
	className: "!w-48 h-48 !rounded-full",
};
