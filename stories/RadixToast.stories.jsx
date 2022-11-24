import React, {useState} from "react";

import * as Toast from "@radix-ui/react-toast";
import cx from "classnames";
import Button from "./components/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Radix UI/Radix Toast",
	component: Toast,
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
const DefaultRadixToast = (args) => {
	const [openToast, setOpenToast] = useState(false);
	return (
		<Toast.Provider>
			<Button
				onClick={() => {
					if (openToast) {
						setOpenToast(false);
						setTimeout(() => {
							setOpenToast(true);
						}, 100);
					} else {
						setOpenToast(true);
					}
				}}
			>
				Show Toast
			</Button>
			<Toast.Root
				open={openToast}
				onOpenChange={setOpenToast}
				className={cx(
					"z-50 fixed bottom-4 inset-x-4 w-auto md:top-4 md:right-4 md:left-auto md:bottom-auto md:w-full md:max-w-sm shadow-lg rounded-lg",
					"bg-white dark:bg-neutral-800",
					"radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right",
					"radix-state-closed:animate-toast-hide",
					"radix-swipe-end:animate-toast-swipe-out",
					"translate-x-radix-toast-swipe-move-x",
					"radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]",
					"focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
				)}
			>
				<div className="flex">
					<div className="w-0 flex-1 flex items-center pl-5 py-4">
						<div className="w-full radix">
							<Toast.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
								Pull Request Review
							</Toast.Title>
							<Toast.Description className="mt-1 text-sm text-gray-700 dark:text-gray-400">
								Someone requested your review on{" "}
								<span className="font-medium">repository/branch</span>
							</Toast.Description>
						</div>
					</div>
					<div className="flex">
						<div className="flex flex-col px-3 py-2 space-y-1">
							<div className="h-0 flex-1 flex">
								<Toast.Action
									altText="view now"
									className="w-full border border-transparent rounded-lg px-3 py-2 flex items-center justify-center text-sm font-medium text-blue-600 dark:text-blue-500 hover:bg-gray-100 dark:hover:bg-neutral-900 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
									onClick={(e) => {
										e.preventDefault();
										window.open("https://github.com");
									}}
								>
									Review
								</Toast.Action>
							</div>
							<div className="h-0 flex-1 flex">
								<Toast.Close className="w-full border border-transparent rounded-lg px-3 py-2 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-neutral-900 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
									Dismiss
								</Toast.Close>
							</div>
						</div>
					</div>
				</div>
			</Toast.Root>

			<Toast.Viewport />
		</Toast.Provider>
	);
};

Toast.Root.displayName = "Toast.Root";
// Tooltip.Root.displayName = "Tooltip.Root";
// Tooltip.Trigger.displayName = "Tooltip.Trigger";
// Tooltip.Portal.displayName = "Tooltip.Portal";
// Tooltip.Content.displayName = "Tooltip.Content";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultRadixToast.bind({});