import React from "react";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import cx from "classnames";
import Text from "./components/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Radix UI/Radix NavigationMenu",
	component: NavigationMenu,
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
const DefaultRadixNavigationMenu = (args) => {
	return (
		<>
			<Text className="mb-4">A collection of links for navigating websites.</Text>
			<NavigationMenu.Root className="relative">
				<NavigationMenu.List className="flex flex-row rounded-lg bg-gray-100 dark:bg-neutral-800 p-2">
					<NavigationMenu.Item>
						<NavigationMenu.Trigger
							className={cx(
								"px-3 py-2 text-sm rounded-md hover:bg-gray-50 dark:hover:bg-neutral-900",
								"text-sm font-medium",
								"text-gray-700 dark:text-gray-100"
							)}
						>
							Overview
						</NavigationMenu.Trigger>
						<NavigationMenu.Content
							className={cx(
								"absolute w-auto top-0 left-0 rounded-lg",
								"radix-motion-from-start:animate-enter-from-left",
								"radix-motion-from-end:animate-enter-from-right",
								"radix-motion-to-start:animate-exit-to-left",
								"radix-motion-to-end:animate-exit-to-right"
							)}
						>
							<div className="w-[21rem] lg:w-[23rem] p-3">
								<div className="grid grid-cols-6 gap-4">
									<div className="col-span-2 w-full bg-gray-100 dark:bg-neutral-900 p-4 rounded-md"></div>
									<div className="col-span-4 w-full flex flex-col space-y-3 bg-gray-100 dark:bg-neutral-900 p-4 rounded-md">
										<div className="w-full bg-white dark:bg-neutral-700 h-12 rounded-md"></div>
									</div>
								</div>
							</div>
						</NavigationMenu.Content>
					</NavigationMenu.Item>

					<NavigationMenu.Item>
						<NavigationMenu.Trigger
							className={cx(
								"px-3 py-2 text-sm rounded-md hover:bg-gray-50 dark:hover:bg-neutral-900",
								"text-sm font-medium text-gray-700 dark:text-gray-100"
							)}
						>
							Resources
						</NavigationMenu.Trigger>
						<NavigationMenu.Content
							className={cx(
								"absolute w-auto top-0 left-0 rounded-lg",
								"radix-motion-from-start:animate-enter-from-left",
								"radix-motion-from-end:animate-enter-from-right",
								"radix-motion-to-start:animate-exit-to-left",
								"radix-motion-to-end:animate-exit-to-right"
							)}
						>
							<div className="w-[16rem] lg:w-[18rem] p-3">
								<div className="w-full flex flex-col space-y-2">
									<NavigationMenu.Link
										className={
											"w-full p-2 hover:bg-gray-100 dark:hover:bg-neutral-900 rounded-md"
										}
										href="https://tailwindcss.com"
									>
										<span className="text-sm font-medium text-gray-900 dark:text-gray-100">
											Tailwind CSS
										</span>
										<div className="mt-1 text-sm text-gray-700 dark:text-gray-400">
											A utility-first CSS framework for rapidly building custom
											user interfaces.
										</div>
									</NavigationMenu.Link>
								</div>
							</div>
						</NavigationMenu.Content>
					</NavigationMenu.Item>

					<NavigationMenu.Item asChild>
						<NavigationMenu.Link
							href="https://github.com/ecklf/tailwindcss-radix"
							className={cx(
								"px-3 py-2 text-sm rounded-md hover:bg-gray-50 dark:hover:bg-neutral-900",
								"text-sm font-medium text-gray-700 dark:text-gray-100"
							)}
						>
							GitHub
						</NavigationMenu.Link>
					</NavigationMenu.Item>

					{/* Arrow Indicator  */}
					<NavigationMenu.Indicator
						className={cx(
							"z-10",
							"top-[100%] flex items-end justify-center h-2 overflow-hidden",
							"radix-state-visible:animate-fade-in",
							"radix-state-hidden:animate-fade-out",
							"transition-[width_transform] duration-[250ms] ease-[ease]"
						)}
					>
						<div className="top-1 relative bg-gray-100 dark:bg-neutral-800 w-2 h-2 rotate-45" />
					</NavigationMenu.Indicator>
				</NavigationMenu.List>

				{/* Panel Background */}
				<div
					className={"absolute flex justify-center"}
					style={{
						perspective: "2000px",
					}}
				>
					<NavigationMenu.Viewport
						className={cx(
							"relative mt-2 shadow-lg rounded-md bg-white dark:bg-neutral-800 overflow-hidden",
							"w-radix-navigation-menu-viewport",
							"h-radix-navigation-menu-viewport",
							"radix-state-open:animate-scale-in-content",
							"radix-state-closed:animate-scale-out-content",
							"origin-[top_center] transition-[width_height] duration-300 ease-[ease]"
						)}
					/>
				</div>
			</NavigationMenu.Root>
		</>
	);
};

NavigationMenu.Root.displayName = "NavigationMenu.Root";
// Tooltip.Root.displayName = "Tooltip.Root";
// Tooltip.Trigger.displayName = "Tooltip.Trigger";
// Tooltip.Portal.displayName = "Tooltip.Portal";
// Tooltip.Content.displayName = "Tooltip.Content";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultRadixNavigationMenu.bind({});
