import React from "react";

import BadgeOutline from "./components/BadgeOutline";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/BadgeOutline",
	component: BadgeOutline,
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
const DefaultBadgeOutline = (args) => <BadgeOutline {...args} />;
const GreenBadgeOutline = (args) => <BadgeOutline.green {...args} />;
const YellowBadgeOutline = (args) => <BadgeOutline.yellow {...args} />;
const OrangeBadgeOutline = (args) => <BadgeOutline.orange {...args} />;
const RedBadgeOutline = (args) => <BadgeOutline.red {...args} />;
const PurpleBadgeOutline = (args) => <BadgeOutline.purple {...args} />;
const DarkBadgeOutline = (args) => <BadgeOutline.dark {...args} />;
const BadgesOutline = (args) => (
	<div className="flex gap-4">
		<BadgeOutline {...args} />
		<BadgeOutline.green {...args} />
		<BadgeOutline.yellow {...args} />
		<BadgeOutline.orange {...args} />
		<BadgeOutline.red {...args} />
		<BadgeOutline.purple {...args} />
		<BadgeOutline.dark {...args} />
	</div>
);

BadgeOutline.green.displayName = "BadgeOutline.green";
BadgeOutline.yellow.displayName = "BadgeOutline.yellow";
BadgeOutline.orange.displayName = "BadgeOutline.orange";
BadgeOutline.red.displayName = "BadgeOutline.red";
BadgeOutline.purple.displayName = "BadgeOutline.purple";
BadgeOutline.dark.displayName = "BadgeOutline.dark";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const AllBadgeOutline = BadgesOutline.bind({});
AllBadgeOutline.args = {
	children: "Badge",
};

export const DefaultOutline = DefaultBadgeOutline.bind({});
DefaultOutline.args = {
	children: "Default",
	className: "mt-8",
	large: true,
	pills: true,
};

export const GreenOutline = GreenBadgeOutline.bind({});
GreenOutline.args = {
	children: "Green",
};

export const YellowOutline = YellowBadgeOutline.bind({});
YellowOutline.args = {
	children: "Yellow",
};

export const OrangeOutline = OrangeBadgeOutline.bind({});
OrangeOutline.args = {
	children: "Orange",
};

export const RedOutline = RedBadgeOutline.bind({});
RedOutline.args = {
	children: "Red",
};

export const PurpleOutline = PurpleBadgeOutline.bind({});
PurpleOutline.args = {
	children: "Purple",
};

export const DarkOutline = DarkBadgeOutline.bind({});
DarkOutline.args = {
	children: "Dark",
};
