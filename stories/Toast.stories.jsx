import React from "react";

import toast, { Toaster } from "react-hot-toast";
import Button from "./components/Button";
import useToast from "./components/useToast";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Notifications/Toast",
	component: useToast,
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
const DefaultToast = (args) => {
	const { updateToast, pushToast, dismissToast } = useToast();

	function showToast() {
		pushToast({ message: "Toast", isError: false });
	}
	function showErrorToast() {
		pushToast({ message: "Error toast", isError: true });
	}
	function closeToast() {
		dismissToast();
	}
	function showAsyncToast() {
		const toastId = pushToast({
			message: "Loading Toast",
			isLoading: true,
		});
		setTimeout(() => {
			updateToast({ toastId, message: "Done Toast", isError: false });
		}, 3000);
	}
	return (
		<>
			<Toaster />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-32">
				<Button.green onClick={showToast}>Show Toast</Button.green>
				<Button.red onClick={showErrorToast}>Show Error Toast</Button.red>
				<Button.orange onClick={showAsyncToast}>Show Async Toast</Button.orange>
				<Button.secondary onClick={closeToast}>Close Toast</Button.secondary>
			</div>
		</>
	);
};

const DefaultToastSuccess = (args) => {
	const { pushToast } = useToast();

	function showToast() {
		pushToast({ message: args.message, isError: false });
	}
	return (
		<>
			<Toaster />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-32">
				<Button.green onClick={showToast}>Show Toast</Button.green>
			</div>
		</>
	);
};

const DefaultToastError = (args) => {
	const { pushToast } = useToast();

	function showErrorToast() {
		pushToast({ message: args.message, isError: true });
	}
	return (
		<>
			<Toaster />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-32">
				<Button.red onClick={showErrorToast}>Show Error Toast</Button.red>
			</div>
		</>
	);
};

const DefaultToastAsync = (args) => {
	const { updateToast, pushToast, dismissToast } = useToast();

	function closeToast() {
		dismissToast();
	}
	function showAsyncToast() {
		const toastId = pushToast({
			message: args.message,
			isLoading: true,
		});
		setTimeout(() => {
			updateToast({ toastId, message: args.updateMessage, isError: false });
		}, 3000);
	}
	return (
		<>
			<Toaster />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-32">
				<Button.orange onClick={showAsyncToast}>Show Async Toast</Button.orange>
				<Button.secondary onClick={closeToast}>Close Toast</Button.secondary>
			</div>
		</>
	);
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultToast.bind({});

export const Success = DefaultToastSuccess.bind({});
Success.args = {
	message: "Toast Success",
};

export const Error = DefaultToastError.bind({});
Error.args = {
	message: "Toast Error",
};

export const Async = DefaultToastAsync.bind({});
Async.args = {
	message: "Async Toast",
	updateMessage: "Done Async Toast",
};
