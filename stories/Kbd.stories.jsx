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
	<div className="flex items-center flex-wrap gap-2 sm:max-w-sm">
		<Kbd>Esc</Kbd>
		<Kbd>Tab</Kbd>
		<Kbd>Caps Lock</Kbd>
		<Kbd>Shift</Kbd>
		<Kbd>Ctrl</Kbd>
		<Kbd>Fn</Kbd>
		<Kbd>Alt</Kbd>
		<Kbd>Spacebar</Kbd>
		<Kbd>Enter</Kbd>
		<Kbd>Backspace</Kbd>
		<Kbd>Delete</Kbd>
		<Kbd>
			<svg
				className="w-4 h-4"
				aria-hidden="true"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 320 512"
			>
				<path d="M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z" />
			</svg>
		</Kbd>
		<Kbd>
			<svg
				className="w-4 h-4"
				aria-hidden="true"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 320 512"
			>
				<path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z" />
			</svg>
		</Kbd>
		<Kbd>
			<svg
				className="w-4 h-4"
				aria-hidden="true"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 256 512"
			>
				<path d="M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z" />
			</svg>
		</Kbd>
		<Kbd>
			<svg
				className="w-4 h-4"
				aria-hidden="true"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 256 512"
			>
				<path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" />
			</svg>
		</Kbd>
	</div>
);

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const AllKbd = Kbds.bind({});

export const Default = DefaultKbd.bind({});
Default.args = {
	children: "Keyboard",
	className: "px-8"
};