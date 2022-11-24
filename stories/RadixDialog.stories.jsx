import React, {Fragment, useState} from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { XIcon } from "@heroicons/react/outline";
import { Transition } from "@headlessui/react";
import Button from "./components/Button";
import cx from "classnames";
import Text from "./components/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Radix UI/Radix Dialog",
	component: Dialog,
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
const DefaultRadixDialog = (args) => {
	const [openDialog, setOpenDialog] = useState(false);
	return (
		<>
			<Text className="mb-4">
				A window overlaid on either the primary window or another dialog window,
				rendering the content underneath inert.
			</Text>
			<Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
				<Dialog.Trigger asChild>
					<Button>Open Dialog</Button>
				</Dialog.Trigger>
				<Transition.Root show={openDialog}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay
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
						<Dialog.Content
							forceMount
							className={cx(
								"fixed z-50",
								"w-[95vw] max-w-md rounded-lg p-4 md:w-full",
								"top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
								"bg-white dark:bg-neutral-900",
								"focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
							)}
						>
							<Dialog.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
								Edit profile
							</Dialog.Title>
							<Dialog.Description className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
								Make changes to your profile here. Click save when you&apos;re
								done.
							</Dialog.Description>
							<form className="mt-2 space-y-2">
								<fieldset>
									<label
										htmlFor="firstName"
										className="text-xs font-medium text-gray-700 dark:text-gray-400"
									>
										First Name
									</label>
									<input
										id="firstName"
										type="text"
										placeholder="Tim"
										autoComplete="given-name"
										className={cx(
											"mt-1 block w-full rounded-md",
											"text-sm text-gray-700 placeholder:text-gray-500 dark:text-gray-400 dark:placeholder:text-gray-600",
											"border border-gray-400 focus-visible:border-transparent dark:border-gray-700 dark:bg-neutral-800",
											"focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
										)}
									/>
								</fieldset>
							</form>

							<div className="mt-4 flex justify-end">
								<Dialog.Close
									onClick={() => alert("Saved !")}
									className={cx(
										"inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
										"bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:text-gray-100 dark:hover:bg-blue-600",
										"border border-transparent",
										"focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
									)}
								>
									Save
								</Dialog.Close>
							</div>

							<Dialog.Close
								className={cx(
									"absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
									"focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
								)}
							>
								<XIcon className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
							</Dialog.Close>
						</Dialog.Content>
					</Transition.Child>
				</Transition.Root>
			</Dialog.Root>
		</>
	);
};

Dialog.Root.displayName = "Dialog.Root";
// Tooltip.Root.displayName = "Tooltip.Root";
// Tooltip.Trigger.displayName = "Tooltip.Trigger";
// Tooltip.Portal.displayName = "Tooltip.Portal";
// Tooltip.Content.displayName = "Tooltip.Content";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultRadixDialog.bind({});
