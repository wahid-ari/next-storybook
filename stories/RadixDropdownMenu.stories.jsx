import React, { useState } from "react";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import cx from "classnames";
import Text from "./components/Text";
import {
	ArrowSmRightIcon,
	CheckIcon,
	ExternalLinkIcon,
	FilterIcon,
	UserCircleIcon,
	ViewGridAddIcon,
	ViewGridIcon,
} from "@heroicons/react/outline";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Radix UI/Radix DropdownMenu",
	component: DropdownMenu,
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
const DefaultRadixDropdownMenu = (args) => {
	const [showGrid, setShowGrid] = useState(false);
	const generalMenuItems = [
		{
			label: "New File",
			icon: <FilterIcon className="mr-2 h-3.5 w-3.5" />,
			shortcut: "⌘+N",
		},
	];

	const users = [
		{
			name: "Adam",
			url: "https://github.com/adamwathan.png",
		},
	];
	return (
		<>
			<Text className="mb-4">Displays a menu to the user—such as a set of actions or functions—triggered by a button.</Text>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild>
					<button className="flex items-center px-2 py-1 bg-blue-500 hover:bg-blue-600 cursor-pointer transition-all text-white rounded focus:outline-none">
						Open Dropdown
					</button>
				</DropdownMenu.Trigger>

				<DropdownMenu.Portal>
					<DropdownMenu.Content
						align="end"
						sideOffset={5}
						className={cx(
							" radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
							"w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56",
							"bg-white dark:bg-neutral-800"
						)}
					>
						{generalMenuItems.map(({ label, icon, shortcut }, i) => (
							<DropdownMenu.Item
								key={`${label}-${i}`}
								className={cx(
									"flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none",
									"text-gray-400 focus:bg-gray-100 dark:text-gray-500 dark:focus:bg-neutral-900"
								)}
							>
								{icon}
								<span className="flex-grow text-gray-700 dark:text-gray-300">
									{label}
								</span>
								{shortcut && <span className="text-xs">{shortcut}</span>}
							</DropdownMenu.Item>
						))}

						<DropdownMenu.Separator className="my-1 h-px bg-gray-200 dark:bg-neutral-700" />

						<DropdownMenu.CheckboxItem
							checked={showGrid}
							onCheckedChange={setShowGrid}
							className={cx(
								"flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none",
								"text-gray-400 focus:bg-gray-100 dark:text-gray-500 dark:focus:bg-neutral-900"
							)}
						>
							{showGrid ? (
								<ViewGridIcon className="mr-2 h-4 w-4" />
							) : (
								<ViewGridAddIcon className="mr-2 h-3.5 w-3.5 text-gray-700 dark:text-gray-300" />
							)}
							<span className="flex-grow text-gray-700 dark:text-gray-300">
								Show Grid
							</span>
							<DropdownMenu.ItemIndicator>
								<CheckIcon className="h-3.5 w-3.5 text-green-600" />
							</DropdownMenu.ItemIndicator>
						</DropdownMenu.CheckboxItem>

						<DropdownMenu.Separator className="my-1 h-px bg-gray-200 dark:bg-neutral-700" />

						<DropdownMenu.Sub>
							<DropdownMenu.SubTrigger
								className={cx(
									"flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none",
									"text-gray-400 focus:bg-gray-100 dark:text-gray-500 dark:focus:bg-neutral-900"
								)}
							>
								<ExternalLinkIcon className="mr-2 h-3.5 w-3.5" />
								<span className="flex-grow text-gray-700 dark:text-gray-300">
									Share
								</span>
								<ArrowSmRightIcon className="h-3.5 w-3.5" />
							</DropdownMenu.SubTrigger>
							<DropdownMenu.Portal>
								<DropdownMenu.SubContent
									className={cx(
										"origin-radix-dropdown-menu radix-side-right:animate-scale-in",
										"w-full rounded-md px-1 py-1 text-xs shadow-md",
										"bg-white dark:bg-neutral-800"
									)}
								>
									{users.map(({ name, url }, i) => (
										<DropdownMenu.Item
											key={`${name}-${i}`}
											className={cx(
												"flex w-28 cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none md:w-32",
												"text-gray-400 focus:bg-gray-100 dark:text-gray-500 dark:focus:bg-neutral-900"
											)}
										>
											{url ? (
												<div className="relative mr-2.5 h-6 w-6">
													<Image
														alt="avatar"
														src={url}
														layout="fill"
														className="rounded-full"
													/>
												</div>
											) : (
												<UserCircleIcon className="mr-2.5 h-6 w-6" />
											)}
											<span className="text-gray-700 dark:text-gray-300">
												{name}
											</span>
										</DropdownMenu.Item>
									))}
								</DropdownMenu.SubContent>
							</DropdownMenu.Portal>
						</DropdownMenu.Sub>
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
		</>
	);
};

DropdownMenu.Root.displayName = "DropdownMenu.Root";
// Tooltip.Root.displayName = "Tooltip.Root";
// Tooltip.Trigger.displayName = "Tooltip.Trigger";
// Tooltip.Portal.displayName = "Tooltip.Portal";
// Tooltip.Content.displayName = "Tooltip.Content";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultRadixDropdownMenu.bind({});
