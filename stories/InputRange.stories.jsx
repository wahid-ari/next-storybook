import React from "react";
import { useState } from "react";

import InputRange from "./components/InputRange";
import Text from "./components/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Data Input/InputRange",
	component: InputRange,
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
const DefaultInputRange = (args) => {
	// const [rangeValue, setRangeValue] = useState(args.value);
	const [rangeValue, setRangeValue] = useState(30);
	function handleRangeChange(e) {
		setRangeValue(e.target.value);
	}
	return (
		<>
			<InputRange {...args} onChange={handleRangeChange} value={rangeValue} />
			<Text className="mb-4 text-sm font-medium !text-red-500">
				Range : {rangeValue ? rangeValue : ""}
			</Text>
		</>
	);
};

const InputRangeValueMinMax = (args) => {
	const [rangeValueMinMax, setRangeValueMinMax] = useState(50);
	function handleRangeMinMaxChange(e) {
		setRangeValueMinMax(e.target.value);
	}
	return (
		<>
			<InputRange
				{...args}
				onChange={handleRangeMinMaxChange}
				value={rangeValueMinMax}
			/>
			<Text className="mb-4 text-sm font-medium !text-red-500">
				Range : {rangeValueMinMax ? rangeValueMinMax : ""}
			</Text>
		</>
	);
};

const InputRangeStep = (args) => {
	const [rangeValueStep, setRangeValueStep] = useState(70);
	function handleRangeStepChange(e) {
		setRangeValueStep(e.target.value);
	}
	return (
		<>
			<InputRange
				{...args}
				onChange={handleRangeStepChange}
				value={rangeValueStep}
			/>
			<Text className="mb-4 text-sm font-medium !text-red-500">
				Range : {rangeValueStep ? rangeValueStep : ""}
			</Text>
		</>
	);
};

const InputRangeDisabled = (args) => {
	return <InputRange {...args} value="50" disabled />;
};

// const DisabledInput = (args) => <Input.disabled {...args} />;

// Input.disabled.displayName = "Input.disabled";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultInputRange.bind({});
Default.args = {
	label: "Input Range",
	name: "range",
	// value: 35,
};

export const ValueMinMax = InputRangeValueMinMax.bind({});
ValueMinMax.args = {
	label: "Input Range Min 20 Max 80",
	name: "rangeminmax",
	min: "20",
	max: "80",
};

export const Step = InputRangeStep.bind({});
Step.args = {
	label: "Input Range Step 10",
	name: "rangestep",
	step: "10",
};

export const Disabled = InputRangeDisabled.bind({});
Disabled.args = {
	label: "Input Range Disabled",
	name: "rangedisabled",
};
