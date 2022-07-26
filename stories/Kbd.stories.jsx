import React from "react";

import Kbd from "./components/Kbd";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/Kbd (Keyboard)",
	component: Kbd,
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
const DefaultKbd = (args) => <Kbd {...args} />;
const Kbds = (args) => (
	<div className="flex items-center flex-wrap gap-2">
		<Kbd>Shift</Kbd>
		<Kbd>Ctrl</Kbd>
		<Kbd>Tab</Kbd>
		<Kbd>Caps Lock</Kbd>
		<Kbd className="px-5">Esc</Kbd>
		<Kbd className="px-5">Spacebar</Kbd>
		<Kbd className="px-5">Enter</Kbd>
	</div>
);

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const AllKbd = Kbds.bind({});

export const Default = DefaultKbd.bind({});
Default.args = {
	children: "Keyboard",
	className: "mt-8",
};