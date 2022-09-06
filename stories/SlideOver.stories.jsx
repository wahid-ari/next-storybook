import { React, useState, Fragment } from "react";

import { Transition, Dialog } from "@headlessui/react";
import Button from "./components/Button";
import {
	ArrowSmLeftIcon,
	ArrowSmRightIcon,
	ArrowSmUpIcon,
	XIcon,
} from "@heroicons/react/outline";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Headless UI/SlideOver",
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
const DefaultSlideOver = (args) => {
	const [slideOver, setSlideOver] = useState(false);
	const [leftSlideOver, setLeftSlideOver] = useState(false);
	const [bottomSlideOver, setBottomSlideOver] = useState(false);

	return (
		<>
			<Button onClick={() => setSlideOver(true)} className="mb-4 flex gap-x-2">
				From Right Slide Over <ArrowSmLeftIcon className="w-5 h-5 text-white" />
			</Button>

			<Transition.Root show={slideOver} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={setSlideOver}>
					<Transition.Child
						as={Fragment}
						enter="ease-in-out duration-500"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in-out duration-500"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-hidden">
						<div className="absolute inset-0 overflow-hidden">
							<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
								<Transition.Child
									as={Fragment}
									enter="transform transition ease-in-out duration-500 sm:duration-700"
									enterFrom="translate-x-full"
									enterTo="translate-x-0"
									leave="transform transition ease-in-out duration-500 sm:duration-700"
									leaveFrom="translate-x-0"
									leaveTo="translate-x-full"
								>
									<Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
										<Transition.Child
											as={Fragment}
											enter="ease-in-out duration-500"
											enterFrom="opacity-0"
											enterTo="opacity-100"
											leave="ease-in-out duration-500"
											leaveFrom="opacity-100"
											leaveTo="opacity-0"
										>
											<div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
												<button
													type="button"
													className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
													onClick={() => setSlideOver(false)}
												>
													<span className="sr-only">Close panel</span>
													<XIcon className="h-6 w-6" aria-hidden="true" />
												</button>
											</div>
										</Transition.Child>
										<div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-neutral-900 py-6 shadow-xl">
											<div className="px-4 sm:px-6">
												<Dialog.Title className="text-lg font-medium text-gray-900 dark:text-white">
													{" "}
													Panel title{" "}
												</Dialog.Title>
											</div>
											<div className="relative mt-6 flex-1 px-4 sm:px-6">
												{/* Replace with your content */}
												<div className="absolute inset-0 px-4 sm:px-6">
													<div
														className="h-full border-2 rounded border-dashed border-gray-200 dark:border-neutral-700"
														aria-hidden="true"
													/>
												</div>
												{/* /End replace */}
											</div>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition.Root>

			<Button.green
				onClick={() => setLeftSlideOver(true)}
				className="mb-4 flex gap-x-2"
			>
				From Left Slide Over <ArrowSmRightIcon className="w-5 h-5 text-white" />
			</Button.green>

			<Transition.Root show={leftSlideOver} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={setLeftSlideOver}>
					<Transition.Child
						as={Fragment}
						enter="ease-in-out duration-500"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in-out duration-500"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-hidden">
						<div className="absolute inset-0 overflow-hidden">
							<div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
								<Transition.Child
									as={Fragment}
									enter="transform transition ease-in-out duration-500 sm:duration-700"
									enterFrom="-translate-x-full"
									enterTo="translate-x-0"
									leave="transform transition ease-in-out duration-500 sm:duration-700"
									leaveFrom="translate-x-0"
									leaveTo="-translate-x-full"
								>
									<Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
										<Transition.Child
											as={Fragment}
											enter="ease-in-out duration-500"
											enterFrom="opacity-0"
											enterTo="opacity-100"
											leave="ease-in-out duration-500"
											leaveFrom="opacity-100"
											leaveTo="opacity-0"
										>
											<div className="absolute top-0 right-0 -mr-8 flex pt-4 pl-2 sm:-mr-10 sm:pl-4">
												<button
													type="button"
													className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
													onClick={() => setLeftSlideOver(false)}
												>
													<span className="sr-only">Close panel</span>
													<XIcon className="h-6 w-6" aria-hidden="true" />
												</button>
											</div>
										</Transition.Child>
										<div className="flex h-full flex-col overflow-none bg-white dark:bg-neutral-900 py-6 shadow-xl">
											<div className="px-4 sm:px-6">
												<Dialog.Title className="text-lg font-medium text-gray-900 dark:text-white">
													{" "}
													Left Panel title{" "}
												</Dialog.Title>
											</div>
											<div className="relative mt-6 flex-1 px-4 sm:px-6">
												{/* Replace with your content */}
												<div className="absolute inset-0 px-4 sm:px-6">
													<div
														className="h-full border-2 rounded border-dashed border-gray-200 dark:border-neutral-700"
														aria-hidden="true"
													/>
												</div>
												{/* /End replace */}
											</div>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition.Root>

			<Button.orange
				onClick={() => setBottomSlideOver(true)}
				className="mb-4 flex gap-x-2"
			>
				From Bottom Slide Over <ArrowSmUpIcon className="w-5 h-5 text-white" />
			</Button.orange>

			<Transition.Root show={bottomSlideOver} as={Fragment}>
				<Dialog as="div" className="relative z-50" onClose={setBottomSlideOver}>
					<Transition.Child
						as={Fragment}
						enter="ease-in-out duration-500"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in-out duration-500"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-hidden">
						<div className="absolute inset-0 overflow-hidden">
							<div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
								<Transition.Child
									as={Fragment}
									enter="transform transition ease-in-out duration-500 sm:duration-700"
									enterFrom="translate-y-full"
									enterTo="translate-y-100"
									leave="transform transition ease-in-out duration-500 sm:duration-700"
									leaveFrom="translate-y-100"
									leaveTo="translate-y-full"
								>
									<Dialog.Panel className="absolute bottom-0 pointer-events-auto w-screen h-40">
										<Transition.Child
											as={Fragment}
											enter="ease-in-out duration-500"
											enterFrom="opacity-0"
											enterTo="opacity-100"
											leave="ease-in-out duration-500"
											leaveFrom="opacity-100"
											leaveTo="opacity-0"
										>
											<div className="absolute right-0 flex pt-6 pr-5">
												<button
													type="button"
													className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
													onClick={() => setBottomSlideOver(false)}
												>
													<span className="sr-only">Close panel</span>
													<XIcon className="h-6 w-6" aria-hidden="true" />
												</button>
											</div>
										</Transition.Child>
										<div className="flex h-full flex-col overflow-none bg-white dark:bg-neutral-900 py-6 shadow-xl">
											<div className="px-4 sm:px-6">
												<Dialog.Title className="text-lg font-medium text-gray-900 dark:text-white">
													{" "}
													Bottom Panel title{" "}
												</Dialog.Title>
											</div>
											<div className="relative mt-6 flex-1 px-4 sm:px-6">
												{/* Replace with your content */}
												<div className="absolute inset-0 px-4 sm:px-6">
													<div
														className="h-full border-2 rounded border-dashed border-gray-200 dark:border-neutral-700"
														aria-hidden="true"
													/>
												</div>
												{/* /End replace */}
											</div>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
};

Transition.Root.displayName = "Transition.Root";
Transition.Child.displayName = "Transition.Child";
Dialog.displayName = "Dialog";
Dialog.Panel.displayName = "Dialog.Panel";
Dialog.Title.displayName = "Dialog.Title";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultSlideOver.bind({});
