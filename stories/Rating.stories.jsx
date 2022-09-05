import React from "react";

import Rating from "./components/Rating";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Displays/Rating",
	component: Rating,
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
const DefaultRating = (args) => {
	return <Rating {...args} />;
};

const AllRating = (args) => {
	return (
		<>
			<Rating {...args} />
			<Rating
				{...args}
				className="mt-4 gap-1"
				activeClassName="!w-7 !h-7 !text-red-500"
				inactiveClassName="!w-7 !h-7"
			/>
			<Rating
				{...args}
				className="my-4 gap-2"
				activeClassName="!w-9 !h-9 !text-emerald-500"
				inactiveClassName="!w-9 !h-9"
			/>
		</>
	);
};

// Input.disabled.displayName = "Input.disabled";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const All = AllRating.bind({});
All.args = {
	active: 2,
	inactive: 3,
};

export const Default = DefaultRating.bind({});
Default.args = {
	active: 1,
	inactive: 4,
};

export const Custom = DefaultRating.bind({});
Custom.args = {
	active: 2,
	inactive: 3,
	className: "mt-4 gap-1", 
	activeClassName: "!w-7 !h-7 !text-red-500", 
	inactiveClassName: "!w-7 !h-7"
};
