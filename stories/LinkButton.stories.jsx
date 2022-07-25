import React from "react";

import LinkButton from "./components/LinkButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/LinkButton",
	component: LinkButton,
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
const DefaultLinkButton = (args) => <LinkButton {...args} />;
const SecondaryLinkButton = (args) => <LinkButton.secondary {...args} />;
const GreenLinkButton = (args) => <LinkButton.green {...args} />;
const YellowLinkButton = (args) => <LinkButton.yellow {...args} />;
const OrangeLinkButton = (args) => <LinkButton.orange {...args} />;
const RedLinkButton = (args) => <LinkButton.red {...args} />;
const PurpleLinkButton = (args) => <LinkButton.purple {...args} />;
const DarkLinkButton = (args) => <LinkButton.dark {...args} />;
const LinkButtons = (args) => (
	<div className="flex gap-4 flex-wrap">
		<LinkButton {...args} />
		<LinkButton.secondary {...args} />
		<LinkButton.green {...args} />
		<LinkButton.yellow {...args} />
		<LinkButton.orange {...args} />
		<LinkButton.red {...args} />
		<LinkButton.purple {...args} />
		<LinkButton.dark {...args} />
	</div>
);

LinkButton.secondary.displayName = "LinkButton.secondary";
LinkButton.green.displayName = "LinkButton.green";
LinkButton.yellow.displayName = "LinkButton.yellow";
LinkButton.orange.displayName = "LinkButton.orange";
LinkButton.red.displayName = "LinkButton.red";
LinkButton.purple.displayName = "LinkButton.purple";
LinkButton.dark.displayName = "LinkButton.dark";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const AllLinkButton = LinkButtons.bind({});
AllLinkButton.args = {
	href: "#",
	children: "Link Button",
};

export const NewTab = DefaultLinkButton.bind({});
NewTab.args = {
	className: "font-bold mt-8",
	href: "https://www.google.com",
	pills: false,
	children: "Default",
	target: "_blank"
};

export const Default = DefaultLinkButton.bind({});
Default.args = {
	className: "font-bold mt-8",
	href: "https://www.google.com",
	pills: false,
	children: "Default",
};

export const Secondary = SecondaryLinkButton.bind({});
Secondary.args = {
	href: "#",
	children: "Secondary",
};

export const Green = GreenLinkButton.bind({});
Green.args = {
	href: "#",
	children: "Green",
};

export const Yellow = YellowLinkButton.bind({});
Yellow.args = {
	href: "#",
	children: "Yellow",
};

export const Orange = OrangeLinkButton.bind({});
Orange.args = {
	href: "#",
	children: "Orange",
};

export const Red = RedLinkButton.bind({});
Red.args = {
	href: "#",
	children: "Red",
};

export const Purple = PurpleLinkButton.bind({});
Purple.args = {
	href: "#",
	children: "Purple",
};

export const Dark = DarkLinkButton.bind({});
Dark.args = {
	href: "#",
	children: "Dark",
};
