import React from "react";
import Image from "next/image";

// import Section from "./components/Section";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Utilities/Image",
	// component: Section,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	// argTypes: {
	// 	className: { control: "className" },
	// },
	// argTypes: {
	// 	disabled: { control: "boolean" },
	// 	pills: { control: "boolean", options: [true, false] },
	// },
};

Image.displayName = "Image";

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const DefaultImage = (args) => (
	<div className="relative h-44 sm:h-56 sm:w-80">
		<Image
			alt="Image"
			src="https://images.unsplash.com/photo-1658165928995-d15d058bd42b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"
			layout="fill"
			{...args}
		/>
	</div>
);

const ImageSize = (args) => (
	<Image
		alt="Image"
		src="https://images.unsplash.com/photo-1658165928995-d15d058bd42b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"
		{...args}
	/>
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultImage.bind({});
Default.args = {
	className: "rounded-lg",
};

export const Size = ImageSize.bind({});
Size.args = {
	className: "rounded-lg",
	height: 200,
	width: 270,
};
