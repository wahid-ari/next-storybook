import React from "react";

import Timeline from "./components/Timeline";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Utilities/Timeline",
	component: Timeline,
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
const DefaultTimeline = (args) => (
	<Timeline className="!py-0.5" {...args}>
		<Timeline.item title="Application v1" time="December 6th, 2021">
			<p className="text-base font-normal text-gray-500 dark:text-gray-300">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</p>
		</Timeline.item>
		<Timeline.item title="Application v2" time="January 1st, 2022">
			<p className="text-base font-normal text-gray-500 dark:text-gray-300">
				When an unknown printer took a galley of type and scrambled it to make a
				type specimen book.
			</p>
		</Timeline.item>
	</Timeline>
);

const Timeline_Item = (args) => (
	<Timeline.item {...args}>
		<p className="text-base font-normal text-gray-500 dark:text-gray-300">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		</p>
	</Timeline.item>
);

Timeline.item.displayName = "Timeline.item";

export const Default = DefaultTimeline.bind({});
export const TimelineItem = Timeline_Item.bind({});
TimelineItem.args = {
	title: "Application v1",
	time: "December 6th, 2021",
};
