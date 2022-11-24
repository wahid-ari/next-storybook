import React, { useState } from "react";

import * as Slider from "@radix-ui/react-slider";
import cx from "classnames";
import Text from "./components/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Radix UI/Radix Slider",
	component: Slider,
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
const DefaultRadixSlider = (args) => {
	const [slider, setSlider] = useState([args.value]);
	return (
		<>
			<Text className="mb-4">An input where the user selects a value from within a given range.</Text>
			<Text className="mb-2">{slider}</Text>
			<Slider.Root
				onValueChange={(e) => setSlider(e)}
				defaultValue={slider}
				max={100}
				step={1}
				aria-label="value"
				className="relative flex h-5 w-64 touch-none items-center"
			>
				<Slider.Track className="relative h-1 w-full grow rounded-full bg-gray-100 dark:bg-neutral-800">
					<Slider.Range className="absolute h-full rounded-full bg-blue-600	" />
				</Slider.Track>
				<Slider.Thumb
					className={cx(
						"block h-5 w-5 rounded-full bg-blue-600",
						"focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
					)}
				></Slider.Thumb>
			</Slider.Root>
		</>
	);
};

Slider.Root.displayName = "Slider.Root";
// Tooltip.Root.displayName = "Tooltip.Root";
// Tooltip.Trigger.displayName = "Tooltip.Trigger";
// Tooltip.Portal.displayName = "Tooltip.Portal";
// Tooltip.Content.displayName = "Tooltip.Content";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultRadixSlider.bind({});
Default.args = {
	value: 50,
};
