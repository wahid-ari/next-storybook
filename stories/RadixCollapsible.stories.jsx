import React, { useState } from "react";

import * as Collapsible from "@radix-ui/react-collapsible";
import cx from "classnames";
import { ChevronDownIcon, PlayIcon, ShareIcon } from "@heroicons/react/outline";
import Text from "./components/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Radix UI/Radix Collapsible",
	component: Collapsible,
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
const DefaultRadixCollapsible = (args) => {
	const [openCollapsible, setOpenCollapsible] = useState(false);

	return (
		<>
			<Text className="mb-4">An interactive component which expands/collapses a panel.</Text>
			<Collapsible.Root open={openCollapsible} onOpenChange={setOpenCollapsible}>
				<Collapsible.Trigger
					className={cx(
						"group flex w-full select-none items-center justify-between rounded-md px-4 py-2 text-left text-sm font-medium",
						"bg-gray-100 text-gray-900 dark:bg-neutral-800 dark:text-gray-100",
						"focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
					)}
				>
					<div>My Playlists</div>
					<ChevronDownIcon className="h-5 w-5 transform duration-300 ease-in-out -rotate-90 group-radix-state-open:rotate-0" />
				</Collapsible.Trigger>
				<Collapsible.Content className="mt-4 flex flex-col space-y-4">
					{["80s Synthwave", "Maximale Konzentration"].map((title, i) => (
						<div
							key={`collapsible-${title}-${i}`}
							className={cx(
								"group",
								"ml-4 flex select-none items-center justify-between rounded-md px-4 py-2 text-left text-sm font-medium",
								"bg-white text-gray-900 hover:bg-gray-100 dark:bg-neutral-800 dark:text-gray-100 dark:hover:bg-neutral-700"
							)}
						>
							{title}
							<div className="hidden items-center space-x-3 group-hover:flex">
								<ShareIcon className="h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" />
								<PlayIcon className="h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" />
							</div>
						</div>
					))}
				</Collapsible.Content>
			</Collapsible.Root>
		</>
	);
};

// Collapsible.Root.displayName = "Collapsible.Root";
// Tooltip.Root.displayName = "Tooltip.Root";
// Tooltip.Trigger.displayName = "Tooltip.Trigger";
// Tooltip.Portal.displayName = "Tooltip.Portal";
// Tooltip.Content.displayName = "Tooltip.Content";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultRadixCollapsible.bind({});
