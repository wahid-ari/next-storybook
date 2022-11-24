import React, { useState } from "react";

import * as Toggle from "@radix-ui/react-toggle";
import Text from "./components/Text";
import Button from "./components/Button";
import { StarIcon } from "@heroicons/react/solid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Radix UI/Radix Toggle",
	component: Toggle,
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
const DefaultRadixToggle = (args) => {
	const [starred, setStarred] = useState(false);
	return (
		<>
			<Text className="mb-2">{starred ? "starred" : "not starred"}</Text>
			<Toggle.Root
				defaultPressed={starred}
				onPressedChange={setStarred}
				asChild
			>
				<Button className="flex items-center">
					{starred ? (
						<StarIcon className="h-4 w-4 text-yellow-400" />
					) : (
						<StarIcon className="h-4 w-4 text-gray-400" />
					)}
					<span className="ml-2 leading-5">{starred ? "Starred" : "Star"}</span>
				</Button>
			</Toggle.Root>
		</>
	);
};

Toggle.Root.displayName = "Toggle.Root";
// Tooltip.Root.displayName = "Tooltip.Root";
// Tooltip.Trigger.displayName = "Tooltip.Trigger";
// Tooltip.Portal.displayName = "Tooltip.Portal";
// Tooltip.Content.displayName = "Tooltip.Content";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultRadixToggle.bind({});
