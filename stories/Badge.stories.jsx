import React from "react";

import Badge from "./components/Badge";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/Badge",
	component: Badge,
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
const DefaultBadge = (args) => <Badge {...args} />;
const GreenBadge = (args) => <Badge.green {...args} />;
const YellowBadge = (args) => <Badge.yellow {...args} />;
const OrangeBadge = (args) => <Badge.orange {...args} />;
const RedBadge = (args) => <Badge.red {...args} />;
const PurpleBadge = (args) => <Badge.purple {...args} />;
const DarkBadge = (args) => <Badge.dark {...args} />;
const Badges = (args) => (
	<div className="flex flex-wrap gap-4">
		<Badge {...args} />
		<Badge.green {...args} />
		<Badge.yellow {...args} />
		<Badge.orange {...args} />
		<Badge.red {...args} />
		<Badge.purple {...args} />
		<Badge.dark {...args} />
	</div>
);

Badge.green.displayName = "Badge.green";
Badge.yellow.displayName = "Badge.yellow";
Badge.orange.displayName = "Badge.orange";
Badge.red.displayName = "Badge.red";
Badge.purple.displayName = "Badge.purple";
Badge.dark.displayName = "Badge.dark";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const AllBadge = Badges.bind({});
AllBadge.args = {
	children: "Badge",
};

export const Default = DefaultBadge.bind({});
Default.args = {
	children: "Default",
	className: "mt-8",
	large: true,
	pills: true,
};

export const Green = GreenBadge.bind({});
Green.args = {
	children: "Green",
};

export const Yellow = YellowBadge.bind({});
Yellow.args = {
	children: "Yellow",
};

export const Orange = OrangeBadge.bind({});
Orange.args = {
	children: "Orange",
};

export const Red = RedBadge.bind({});
Red.args = {
	children: "Red",
};

export const Purple = PurpleBadge.bind({});
Purple.args = {
	children: "Purple",
};

export const Dark = DarkBadge.bind({});
Dark.args = {
	children: "Dark",
};
