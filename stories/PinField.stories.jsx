import React from "react";
import { useState, useRef } from "react";

import PinField from "react-pin-field";
import Button from "./components/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Data Input/PinField",
	component: PinField,
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
const DefaultPinField = (args) => {
	const [pinField, setPinField] = useState();
	const [pinFieldNumeric, setPinFieldNumeric] = useState();
	const [pinFieldUppercase, setPinFieldUppercase] = useState();
	const [pinFieldComplete, setPinFieldComplete] = useState();
	const [pinFieldReset, setPinFieldReset] = useState();
	const pinFieldResetRef = useRef([]);
	const [demoCompleted, setDemoCompleted] = useState(false);
	function changePinField(e) {
		setPinField(e);
	}
	function changePinFieldNumeric(e) {
		setPinFieldNumeric(e);
	}
	function changePinFieldUppercase(e) {
		setPinFieldUppercase(e);
	}
	function changePinFieldReset(e) {
		setPinFieldReset(e);
	}
	function changePinFieldComplete(e) {
		setPinFieldComplete(e);
	}
	function resetPinField() {
		pinFieldResetRef &&
			pinFieldResetRef.current &&
			pinFieldResetRef.current.forEach((input) => (input.value = ""));
		setPinFieldReset("");
	}
	return (
		<>
			<p className="dark:text-white font-medium mb-3">Alphanumeric</p>
			<PinField
				onChange={changePinField}
				length={3}
				validate={/^[a-zA-Z0-9]$/}
				className="w-9 h-9 rounded border border-gray-300 dark:border-neutral-600 bg-gray-50 dark:bg-neutral-800 dark:text-white text-sm font-medium mr-1 text-center p-0 focus:border-sky-500 dark:focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
			/>
			<p className="dark:text-white">value : {pinField}</p>

			<p className="dark:text-white font-medium my-3">Numeric</p>
			<PinField
				onChange={changePinFieldNumeric}
				length={3}
				validate={/^[0-9]$/}
				className="w-9 h-9 rounded border border-gray-300 dark:border-neutral-600 bg-gray-50 dark:bg-neutral-800 dark:text-white text-sm font-medium mr-1 text-center p-0 focus:border-sky-500 dark:focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
			/>
			<p className="dark:text-white">value : {pinFieldNumeric}</p>

			<p className="dark:text-white font-medium my-3">Uppercase</p>
			<PinField
				onChange={changePinFieldUppercase}
				length={3}
				autoFocus
				format={(value) => value.toUpperCase()}
				validate={/^[a-zA-Z0-9]$/}
				className="w-9 h-9 rounded border border-gray-300 dark:border-neutral-600 bg-gray-50 dark:bg-neutral-800 dark:text-white text-sm font-medium mr-1 text-center p-0 focus:border-sky-500 dark:focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
			/>
			<p className="dark:text-white">value : {pinFieldUppercase}</p>

			<p className="dark:text-white font-medium my-3">Reset</p>
			<PinField
				onChange={changePinFieldReset}
				length={3}
				ref={pinFieldResetRef}
				format={(value) => value.toUpperCase()}
				validate={/^[a-zA-Z0-9]$/}
				className="w-9 h-9 rounded border border-gray-300 dark:border-neutral-600 bg-gray-50 dark:bg-neutral-800 dark:text-white text-sm font-medium mr-1 text-center p-0 focus:border-sky-500 dark:focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
			/>
			<Button.red onClick={resetPinField} className="text-sm">
				Reset
			</Button.red>
			<p className="dark:text-white">value : {pinFieldReset}</p>

			<p className="dark:text-white font-medium my-3">On Complete</p>
			<PinField
				onChange={changePinFieldComplete}
				onComplete={() => setDemoCompleted(true)}
				disabled={demoCompleted}
				length={3}
				validate={/^[a-zA-Z0-9]$/}
				className="w-9 h-9 rounded border border-gray-300 dark:border-neutral-600 bg-gray-50 dark:bg-neutral-800 dark:text-white text-sm font-medium mr-1 text-center p-0 focus:border-sky-500 dark:focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
			/>
			<p
				className={`${
					demoCompleted ? "text-green-500" : "text-red-500"
				} text-sm`}
			>
				{demoCompleted ? "Completed" : "Not Completed"}
			</p>
			<p className="dark:text-white">value : {pinFieldComplete}</p>
		</>
	);
};

PinField.displayName = "PinField";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultPinField.bind({});
