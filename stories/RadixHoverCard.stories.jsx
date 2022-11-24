import React from "react";

import * as HoverCard from "@radix-ui/react-hover-card";
import LinkButton from "./components/LinkButton";
import Text from "./components/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Radix UI/Radix HoverCard",
	component: HoverCard,
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
const DefaultHoverCard = (args) => {
	return (
		<>
			<Text className="mb-4">For sighted users to preview content available behind a link.</Text>
			<HoverCard.Root>
				<HoverCard.Trigger className="sm:m-32">
					<LinkButton href="https://twitter.com/twitter" target="_blank">
						Twitter
					</LinkButton>
				</HoverCard.Trigger>
				<HoverCard.Portal>
					<HoverCard.Content className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-xl max-w-xs">
						<div className="bg-sky-500 rounded-full w-8 h-8 flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
								/>
							</svg>
						</div>
						<p className="font-medium text-base mt-2 dark:text-white">
							Twitter
						</p>
						<p className="text-gray-500 dark:text-gray-400 text-sm">@twitter</p>
						<p className="my-2 text-sm text-gray-700 dark:text-gray-300">
							Dolore do ipsum reprehenderit occaecat nostrud aliqua enim cillum
							proident ex cillum.
						</p>
						<div className="flex items-center gap-3">
							<p className="text-gray-500 dark:text-gray-400">
								<span className="text-neutral-800 dark:text-white font-medium">
									0
								</span>{" "}
								Following
							</p>
							<p className="text-gray-500 dark:text-gray-400">
								<span className="text-neutral-800 dark:text-white font-medium">
									1000
								</span>{" "}
								Followers
							</p>
						</div>
						<HoverCard.Arrow className="fill-white dark:fill-neutral-800" />
					</HoverCard.Content>
				</HoverCard.Portal>
			</HoverCard.Root>
		</>
	);
};

HoverCard.Root.displayName = "HoverCard.Root";
HoverCard.Trigger.displayName = "HoverCard.Trigger";
HoverCard.Portal.displayName = "HoverCard.Portal";
HoverCard.Content.displayName = "HoverCard.Content";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultHoverCard.bind({});
