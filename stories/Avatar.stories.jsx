import React from "react";

import Avatar from "./components/Avatar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/Avatar",
	component: Avatar,
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
const DefaultAvatar = (args) => <Avatar {...args} />;
const Avatars = (args) => (
	<>
		<div className="flex -space-x-2 flex-wrap mb-4">
			<Avatar {...args} className="border-red-500" alt="Image Alt"/>
			<Avatar {...args} className="rounded-lg border-emerald-500" alt="Image Alt"/>
		</div>
		<div className="flex flex-wrap mb-4 gap-x-2">
			<Avatar {...args} className="border-orange-500" alt="Image Alt"/>
			<Avatar {...args} alt="Image Alt"/>
		</div>
		<div className="flex flex-wrap mb-4 gap-x-4">
			<Avatar {...args} className="h-10 w-10 border-violet-500" alt="Image Alt"/>
			<Avatar {...args} className="!h-16 !w-16 rounded-lg" alt="Image Alt"/>
		</div>
	</>
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const AllAvatar = Avatars.bind({});
AllAvatar.args = {
	src: "https://ui-avatars.com/api/?name=D+F",
	alt: "Alt Text",
};

export const Default = DefaultAvatar.bind({});
Default.args = {
	className: "mt-8",
	src: "https://ui-avatars.com/api/?name=D+F",
	alt: "Image Alt",
};

export const Rounded = DefaultAvatar.bind({});
Rounded.args = {
	className: "rounded-lg",
	src: "https://ui-avatars.com/api/?name=R+D",
	alt: "Image Alt",
};

export const Border = DefaultAvatar.bind({});
Border.args = {
	className: "rounded-lg border-emerald-500",
	src: "https://ui-avatars.com/api/?name=B+D",
	alt: "Image Alt",
};

export const Large = DefaultAvatar.bind({});
Large.args = {
	className: "!h-16 !w-16",
	src: "https://ui-avatars.com/api/?name=L+G",
	alt: "Image Alt",
};
