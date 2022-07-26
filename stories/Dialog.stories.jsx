import React from "react";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ExternalLinkIcon } from "@heroicons/react/outline";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Headless UI/Dialog (Modal)",
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

const DefaultDialog = (args) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className="flex items-center justify-center py-8">
				<button
					type="button"
					onClick={() => setIsOpen(true)}
					className="flex items-center rounded-md bg-teal-600 hover:bg-teal-700 px-4 py-2 text-sm font-medium text-white transition-all"
				>
					Open dialog
					<ExternalLinkIcon className="ml-2 w-4 h-4 text-white" />
				</button>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={() => setIsOpen(!isOpen)}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
									>
										Lorem Ipsum
									</Dialog.Title>
									<div className="mt-2">
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Voluptate reprehenderit repellendus, labore quisquam sit
											dicta unde, corrupti omnis officia numquam iusto aperiam,
											laborum in nesciunt quo perferendis dignissimos
											voluptatibus ab?
										</p>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700"
											onClick={() => setIsOpen(false)}
										>
											Got it, thanks!
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

Transition.displayName = "Transition";
Dialog.displayName = "Dialog";
Transition.Child.displayName = "Transition.Child";
Dialog.Panel.displayName = "Dialog.Panel";
Dialog.Title.displayName = "Dialog.Title";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultDialog.bind({});
