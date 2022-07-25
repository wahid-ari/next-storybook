import React from "react";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Headless UI/Menu (Dropdown)",
	component: Menu,
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

function ArchiveIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
			/>
		</svg>
	);
}

function MoveIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	);
}

function DeleteIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
			/>
		</svg>
	);
}

const DefaultMenu = (args) => {
	return (
		<div className="w-full flex justify-center mx-auto py-8">
			<Menu as="div" className="relative inline-block text-left">
				{({ open }) => (
					<>
						<div>
							<Menu.Button className="inline-flex w-full justify-center rounded-md bg-teal-600 hover:bg-teal-700 transition-all px-4 py-2 text-sm font-medium text-white">
								Menu
								<ChevronDownIcon
									className={`ml-2 -mr-1 h-5 w-5 text-white ${
										open
											? "transform rotate-180 duration-300"
											: "transform rotate-0 duration-200"
									}`}
									aria-hidden="true"
								/>
								{/* <svg
									xmlns="http://www.w3.org/2000/svg"
									className={`ml-2 -mr-1 h-5 w-5 text-white ${
										open
											? "transform rotate-180 duration-300"
											: "transform rotate-0 duration-200"
									}`}
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19 9l-7 7-7-7"
									/>
								</svg> */}
							</Menu.Button>
						</div>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg">
								<div className="px-1 py-1">
									<Menu.Item>
										{({ active }) => (
											<button
												className={`${
													active ? "bg-teal-600 text-white" : "text-gray-900"
												} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
											>
												<ArchiveIcon
													className={`mr-2 h-5 w-5 ${
														active ? "text-teal-200" : "text-teal-600"
													}`}
													aria-hidden="true"
												/>
												Archive
											</button>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<button
												className={`${
													active ? "bg-teal-600 text-white" : "text-gray-900"
												} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
											>
												<MoveIcon
													className={`mr-2 h-5 w-5 ${
														active ? "text-teal-200" : "text-teal-600"
													}`}
													aria-hidden="true"
												/>
												Move
											</button>
										)}
									</Menu.Item>
								</div>
								<div className="px-1 py-1">
									<Menu.Item>
										{({ active }) => (
											<button
												className={`${
													active ? "bg-teal-600 text-white" : "text-gray-900"
												} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
											>
												<DeleteIcon
													className={`mr-2 h-5 w-5 ${
														active ? "text-teal-200" : "text-teal-600"
													}`}
													aria-hidden="true"
												/>
												Delete
											</button>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</>
				)}
			</Menu>
		</div>
	);
};

Menu.displayName = "Menu";
Transition.displayName = "Transition";
Menu.Button.displayName = "Menu.Button";
Menu.Items.displayName = "Menu.Items";
Menu.Item.displayName = "Menu.Item";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultMenu.bind({});
