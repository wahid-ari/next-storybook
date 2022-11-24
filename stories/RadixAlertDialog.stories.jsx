import React, { useState, Fragment } from "react";

import * as AlertDialog from "@radix-ui/react-alert-dialog";
import Button from "./components/Button";
import Text from "./components/Text";
import { Transition } from "@headlessui/react";
import cx from "classnames";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Radix UI/Radix AlertDialog",
	component: AlertDialog,
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
const DefaultRadixAlertDialog = (args) => {
	const [openAlertDialog, setOpenAlertDialog] = useState(false);
	return (
		<>
			<Text className="mb-4">
				A modal dialog that interrupts the user with important content and
				expects a response.
			</Text>
			<AlertDialog.Root
				open={openAlertDialog}
				onOpenChange={setOpenAlertDialog}
			>
				<AlertDialog.Trigger asChild>
					<Button>Open Alert Dialog</Button>
				</AlertDialog.Trigger>
				<Transition.Root show={openAlertDialog}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<AlertDialog.Overlay
							forceMount
							className="fixed inset-0 z-20 bg-black/50"
						/>
					</Transition.Child>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<AlertDialog.Content
							forceMount
							className={cx(
								"fixed z-50",
								"w-[95vw] max-w-md rounded-lg p-4 md:w-full",
								"top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
								"bg-white dark:bg-neutral-900",
								"focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
							)}
						>
							<AlertDialog.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
								Are you absolutely sure?
							</AlertDialog.Title>
							<AlertDialog.Description className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
								This action cannot be undone. This will permanently delete your
								account and remove your data from our servers.
							</AlertDialog.Description>
							<div className="mt-4 flex justify-end space-x-2">
								<AlertDialog.Cancel
									className={cx(
										"inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
										"bg-white text-gray-900 hover:bg-gray-100 dark:bg-neutral-800 dark:text-gray-100 hover:dark:bg-neutral-700",
										"border border-gray-300 dark:border-transparent",
										"focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
									)}
								>
									Cancel
								</AlertDialog.Cancel>
								<AlertDialog.Action
									onClick={() => alert("Confirmed !")}
									className={cx(
										"inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
										"bg-red-600 text-white hover:bg-red-700 dark:bg-red-700 dark:text-gray-100 dark:hover:bg-red-600",
										"border border-transparent",
										"focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75"
									)}
								>
									Confirm
								</AlertDialog.Action>
							</div>
						</AlertDialog.Content>
					</Transition.Child>
				</Transition.Root>
			</AlertDialog.Root>
		</>
	);
};

AlertDialog.Root.displayName = "AlertDialog.Root";
// Tooltip.Root.displayName = "Tooltip.Root";
// Tooltip.Trigger.displayName = "Tooltip.Trigger";
// Tooltip.Portal.displayName = "Tooltip.Portal";
// Tooltip.Content.displayName = "Tooltip.Content";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultRadixAlertDialog.bind({});
