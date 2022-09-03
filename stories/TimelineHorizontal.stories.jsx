import React from "react";

import TimelineHorizontal from "./components/TimelineHorizontal";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Utilities/TimelineHorizontal",
	component: TimelineHorizontal,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	// argTypes: {
	// 	className: { control: "className" },
	// },
	// argTypes: {
	// 	disabled: { control: "boolean" },
	// 	pills: { control: "boolean", options: [true, false] },
	// },
};

// Image.displayName = "Image";

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const DefaultTimelineHorizontal = (args) => (
	<TimelineHorizontal className="!py-0.5" {...args}>
		<TimelineHorizontal.item title="Application v1" time="December 6th, 2021">
			<p className="text-base font-normal text-gray-500 dark:text-gray-300">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</p>
		</TimelineHorizontal.item>
		<TimelineHorizontal.item title="Application v2" time="January 1st, 2022">
			<p className="text-base font-normal text-gray-500 dark:text-gray-300">
				When an unknown printer took a galley of type and scrambled it to make a
				type specimen book.
			</p>
		</TimelineHorizontal.item>
		<TimelineHorizontal.item title="Application v3" time="May 3rd, 2022">
			<p className="text-base font-normal text-gray-500 dark:text-gray-300">
				When an unknown printer took a galley of type and scrambled it to make a
				type specimen book.
			</p>
		</TimelineHorizontal.item>
	</TimelineHorizontal>
);

const TimelineHorizontal_Item = (args) => (
	<TimelineHorizontal.item {...args}>
		<p className="text-base font-normal text-gray-500 dark:text-gray-300">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		</p>
	</TimelineHorizontal.item>
);

TimelineHorizontal.item.displayName = "TimelineHorizontal.item";

export const Default = DefaultTimelineHorizontal.bind({});
export const TimelineHorizontalItem = TimelineHorizontal_Item.bind({});
TimelineHorizontalItem.args = {
	title: "Application v1",
	time: "December 6th, 2021",
};
