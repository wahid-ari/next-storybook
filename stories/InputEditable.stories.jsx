import React from "react";
import { useState } from "react";

import InputEditable from "./components/InputEditable";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Data Input/InputEditable",
	component: InputEditable,
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
const DefaultInputEditableLabel = (args) => {
	const [canEditLabel, setCanEditLabel] = useState(false);
	const [inputEditableValueLabel, setInputEditableValueLabel] = useState(
		args.value
	);
	function onChangeEditableValueLabel(e) {
		setInputEditableValueLabel(e.target.value);
	}
	function onSaveEditableValueLabel() {
		setCanEditLabel(false);
	}
	function onCancelEditableValueLabel() {
		setInputEditableValueLabel(args.value);
		setCanEditLabel(false);
	}
	return (
		<InputEditable
			{...args}
			value={inputEditableValueLabel}
			onChange={onChangeEditableValueLabel}
			canEdit={canEditLabel}
			onClick={() => setCanEditLabel(true)}
			onSave={onSaveEditableValueLabel}
			onCancel={onCancelEditableValueLabel}
		/>
	);
};

const DefaultInputEditable = (args) => {
	const [canEdit, setCanEdit] = useState(false);
	const [inputEditableValue, setInputEditableValue] = useState(args.value);
	function onChangeEditableValue(e) {
		setInputEditableValue(e.target.value);
	}
	return (
		<InputEditable
			{...args}
			value={inputEditableValue}
			onChange={onChangeEditableValue}
			canEdit={canEdit}
			onClick={() => setCanEdit(true)}
			onSave={() => setCanEdit(false)}
			onCancel={() => setCanEdit(false)}
		/>
	);
};

// Input.disabled.displayName = "Input.disabled";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultInputEditableLabel.bind({});
Default.args = {
	label: "Input Editable Label",
	name: "inputeditablelabel",
	value: "Click this text to edit",
};

export const NoLabel = DefaultInputEditable.bind({});
NoLabel.args = {
	name: "inputeditable",
	value: "Click this text to edit",
};
