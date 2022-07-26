import React from "react";

import LinkButtonOutline from "./components/LinkButtonOutline";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/LinkButtonOutline",
	component: LinkButtonOutline,
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
const DefaultLinkButtonOutline = (args) => <LinkButtonOutline {...args} />;
const GreenLinkButtonOutline = (args) => <LinkButtonOutline.green {...args} />;
const YellowLinkButtonOutline = (args) => <LinkButtonOutline.yellow {...args} />;
const OrangeLinkButtonOutline = (args) => <LinkButtonOutline.orange {...args} />;
const RedLinkButtonOutline = (args) => <LinkButtonOutline.red {...args} />;
const PurpleLinkButtonOutline = (args) => <LinkButtonOutline.purple {...args} />;
const DarkLinkButtonOutline = (args) => <LinkButtonOutline.dark {...args} />;
const LinkButtonOutlines = (args) => (
	<div className="flex gap-4 flex-wrap">
		<LinkButtonOutline {...args} />
		<LinkButtonOutline.green {...args} />
		<LinkButtonOutline.yellow {...args} />
		<LinkButtonOutline.orange {...args} />
		<LinkButtonOutline.red {...args} />
		<LinkButtonOutline.purple {...args} />
		<LinkButtonOutline.dark {...args} />
	</div>
);

LinkButtonOutline.green.displayName = "LinkButtonOutline.green";
LinkButtonOutline.yellow.displayName = "LinkButtonOutline.yellow";
LinkButtonOutline.orange.displayName = "LinkButtonOutline.orange";
LinkButtonOutline.red.displayName = "LinkButtonOutline.red";
LinkButtonOutline.purple.displayName = "LinkButtonOutline.purple";
LinkButtonOutline.dark.displayName = "LinkButtonOutline.dark";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const AllLinkButtonOutline = LinkButtonOutlines.bind({});
AllLinkButtonOutline.args = {
	href: "#",
	children: "Link Button Outline",
};

export const NewTab = DefaultLinkButtonOutline.bind({});
NewTab.args = {
	className: "font-bold mt-8",
	href: "https://www.google.com",
	pills: false,
	children: "Default",
	target: "_blank"
};

export const Default = DefaultLinkButtonOutline.bind({});
Default.args = {
	className: "font-bold mt-8",
	href: "https://www.google.com",
	pills: false,
	children: "Default",
};

export const Green = GreenLinkButtonOutline.bind({});
Green.args = {
	href: "#",
	children: "Green",
};

export const Yellow = YellowLinkButtonOutline.bind({});
Yellow.args = {
	href: "#",
	children: "Yellow",
};

export const Orange = OrangeLinkButtonOutline.bind({});
Orange.args = {
	href: "#",
	children: "Orange",
};

export const Red = RedLinkButtonOutline.bind({});
Red.args = {
	href: "#",
	children: "Red",
};

export const Purple = PurpleLinkButtonOutline.bind({});
Purple.args = {
	href: "#",
	children: "Purple",
};

export const Dark = DarkLinkButtonOutline.bind({});
Dark.args = {
	href: "#",
	children: "Dark",
};
