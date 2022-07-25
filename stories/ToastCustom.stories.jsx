import React from "react";

import toast, { Toaster } from "react-hot-toast";
import Button from "./components/Button";
import useToast from "./components/useToast";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Notifications/Toast Custom",
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
const DefaultToastCustom = (args) => {
	const { pushCustomToast, updateCustomToast, dismissCustomToast } = useToast();

	function showCustomToast() {
		pushCustomToast({ title: "Toast Info", message: "Toast Info Message" });
	}
	function showSuccessCustomToast() {
		pushCustomToast({
			title: "Toast Success",
			message: "Toast Success Message",
			isSuccess: true,
		});
	}
	function showErrorCustomToast() {
		pushCustomToast({
			title: "Toast Error",
			message: "Toast Error Message",
			isError: true,
		});
	}
	function showAsyncCustomToast() {
		const toastId = pushCustomToast({
			title: "Loading",
			message: "Loading Toast",
			isLoading: true,
		});
		setTimeout(() => {
			updateCustomToast({
				toastId,
				title: "Loading Success",
				message: "Loading Success Message",
				isError: false,
			});
		}, 3000);
	}
	function closeCustomToast() {
		dismissCustomToast();
	}
	return (
		<>
			<Toaster />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-32">
				<Button onClick={showCustomToast}>Show Custom Toast</Button>
				<Button.green onClick={showSuccessCustomToast}>
					Show Success Custom Toast
				</Button.green>
				<Button.red onClick={showErrorCustomToast}>
					Show Error Custom Toast
				</Button.red>
				<Button.orange onClick={showAsyncCustomToast}>
					Show Async Custom Toast
				</Button.orange>
				<Button.secondary onClick={closeCustomToast}>
					Close Custom Toast
				</Button.secondary>
			</div>
		</>
	);
};

const DefaultToastCustomInfo = (args) => {
	const { pushCustomToast } = useToast();

	function showCustomToast() {
		pushCustomToast({ title: args.title, message: args.message });
	}
	return (
		<>
			<Toaster />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-32">
				<Button onClick={showCustomToast}>Show Custom Toast</Button>
			</div>
		</>
	);
};

const DefaultToastCustomSuccess = (args) => {
	const { pushCustomToast } = useToast();

	function showSuccessCustomToast() {
		pushCustomToast({
			title: args.title,
			message: args.message,
			isSuccess: true,
		});
	}
	return (
		<>
			<Toaster />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-32">
				<Button.green onClick={showSuccessCustomToast}>
					Show Success Custom Toast
				</Button.green>
			</div>
		</>
	);
};

const DefaultToastCustomError = (args) => {
	const { pushCustomToast } = useToast();

	function showErrorCustomToast() {
		pushCustomToast({
			title: args.title,
			message: args.message,
			isError: true,
		});
	}
	return (
		<>
			<Toaster />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-32">
				<Button.red onClick={showErrorCustomToast}>
					Show Error Custom Toast
				</Button.red>
			</div>
		</>
	);
};

const DefaultToastCustomAsync = (args) => {
	const { pushCustomToast, updateCustomToast, dismissCustomToast } = useToast();

	function showAsyncCustomToast() {
		const toastId = pushCustomToast({
			title: args.title,
			message: args.message,
			isLoading: true,
		});
		setTimeout(() => {
			updateCustomToast({
				toastId,
				title: args.titleUpdate,
				message: args.messageUpdate,
				isError: false,
			});
		}, 3000);
	}
	function closeCustomToast() {
		dismissCustomToast();
	}
	return (
		<>
			<Toaster />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-32">
				<Button.orange onClick={showAsyncCustomToast}>
					Show Async Custom Toast
				</Button.orange>
				<Button.secondary onClick={closeCustomToast}>
					Close Custom Toast
				</Button.secondary>
			</div>
		</>
	);
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultToastCustom.bind({});

export const Info = DefaultToastCustomInfo.bind({});
Info.args = {
	title: "Toast Info",
	message: "Toast Info Text",
};

export const Success = DefaultToastCustomSuccess.bind({});
Success.args = {
	title: "Toast Success",
	message: "Toast Success Text",
};

export const Error = DefaultToastCustomError.bind({});
Error.args = {
	title: "Toast Error",
	message: "Toast Error Text",
};

export const Async = DefaultToastCustomAsync.bind({});
Async.args = {
	title: "Toast Async",
	message: "Toast Async Text",
	titleUpdate: "Toast Async Done",
	messageUpdate: "Toast Async Text Done",
};
