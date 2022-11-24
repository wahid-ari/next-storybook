import React from "react";

import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import cx from "classnames";
import Text from "./components/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Radix UI/Radix AspectRatio",
	component: AspectRatio,
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
const DefaultRadixAspectRatio = (args) => {
	return (
		<>
			<Text className="mb-4">Displays content within a desired ratio.</Text>
			<div className="max-w-sm">
				<Text>ratio=16/9</Text>
				<AspectRatio.Root
					ratio={16 / 9}
					className="mt-2 group relative overflow-hidden h-full w-full rounded-lg shadow-md"
				>
					<div className="absolute inset-0 z-10 flex items-center justify-center">
						<h3 className="select-none bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-3xl font-black uppercase text-transparent duration-300 ease-in-out group-hover:opacity-0 sm:text-4xl">
							Vancouver
						</h3>
					</div>
					<div
						className={cx(
							"absolute inset-0 bg-gray-600 object-cover group-hover:bg-gray-500",
							"transition-colors duration-300 ease-in-out"
						)}
					>
						<Image
							src="https://images.unsplash.com/photo-1609825488888-3a766db05542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
							alt="Vancouver by Matt Wang"
							className="mix-blend-overlay"
							layout="fill"
						/>
					</div>
				</AspectRatio.Root>
			</div>

			<div className="max-w-sm">
				<Text className="mt-4">ratio=4/3</Text>
				<AspectRatio.Root
					ratio={4 / 3}
					className="mt-2 group relative overflow-hidden h-full w-full rounded-lg shadow-md"
				>
					<div className="absolute inset-0 z-10 flex items-center justify-center">
						<h3 className="select-none bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-3xl font-black uppercase text-transparent duration-300 ease-in-out group-hover:opacity-0 sm:text-4xl">
							Vancouver
						</h3>
					</div>
					<div
						className={cx(
							"absolute inset-0 bg-gray-600 object-cover group-hover:bg-gray-500",
							"transition-colors duration-300 ease-in-out"
						)}
					>
						<Image
							src="https://images.unsplash.com/photo-1609825488888-3a766db05542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
							alt="Vancouver by Matt Wang"
							className="mix-blend-overlay"
							layout="fill"
						/>
					</div>
				</AspectRatio.Root>
			</div>

			<div className="max-w-sm">
				<Text className="mt-4">ratio=1</Text>
				<AspectRatio.Root
					ratio={1}
					className="mt-2 group relative overflow-hidden h-full w-full rounded-lg shadow-md"
				>
					<div className="absolute inset-0 z-10 flex items-center justify-center">
						<h3 className="select-none bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-3xl font-black uppercase text-transparent duration-300 ease-in-out group-hover:opacity-0 sm:text-4xl">
							Vancouver
						</h3>
					</div>
					<div
						className={cx(
							"absolute inset-0 bg-gray-600 object-cover group-hover:bg-gray-500",
							"transition-colors duration-300 ease-in-out"
						)}
					>
						<Image
							src="https://images.unsplash.com/photo-1609825488888-3a766db05542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
							alt="Vancouver by Matt Wang"
							className="mix-blend-overlay"
							layout="fill"
						/>
					</div>
				</AspectRatio.Root>
			</div>
		</>
	);
};

AspectRatio.Root.displayName = "AspectRatio.Root";
// Tooltip.Root.displayName = "Tooltip.Root";
// Tooltip.Trigger.displayName = "Tooltip.Trigger";
// Tooltip.Portal.displayName = "Tooltip.Portal";
// Tooltip.Content.displayName = "Tooltip.Content";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultRadixAspectRatio.bind({});
