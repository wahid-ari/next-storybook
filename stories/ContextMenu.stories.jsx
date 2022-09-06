import React from "react";

import * as ContextMenu from "@radix-ui/react-context-menu";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Radix UI/ContextMenu (Right Click)",
	component: ContextMenu,
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
const DefaultContextMenu = (args) => {
	return (
		<ContextMenu.Root>
			<ContextMenu.Trigger>
				<div className="border-2 rounded-md cursor-pointer dark:border-neutral-700 border-dashed p-12 flex items-center justify-center dark:text-white font-medium">
					Right Click Here
				</div>
			</ContextMenu.Trigger>
			<ContextMenu.Portal>
				<ContextMenu.Content className="bg-white dark:bg-neutral-800 rounded shadow-md py-1.5">
					<ul>
						<li className="text-sm group dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-900 transition-all px-3 py-1.5">
							<button
								onClick={() => alert("First Button Clicked !")}
								className="text-gray-600 dark:text-gray-300 group-hover:text-sky-500 font-medium"
							>
								First Button
							</button>
						</li>
						<li className="text-sm group dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-900 transition-all px-3 py-1.5">
							<button
								onClick={() => alert("Second Button Clicked !")}
								className="text-gray-600 dark:text-gray-300 group-hover:text-sky-500 font-medium"
							>
								Second Button
							</button>
						</li>
						<li className="text-sm group dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-900 transition-all px-3 py-1.5">
							<button
								onClick={() => alert("Third Button Clicked !")}
								className="text-gray-600 dark:text-gray-300 group-hover:text-sky-500 font-medium"
							>
								Third Button
							</button>
						</li>
					</ul>
				</ContextMenu.Content>
			</ContextMenu.Portal>
		</ContextMenu.Root>
	);
};

ContextMenu.Root.displayName = "ContextMenu.Root";
ContextMenu.Trigger.displayName = "ContextMenu.Trigger";
ContextMenu.Portal.displayName = "ContextMenu.Portal";
ContextMenu.Content.displayName = "ContextMenu.Content";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultContextMenu.bind({});
