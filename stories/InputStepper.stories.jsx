import React from "react";
import { useState } from "react";

import InputStepper from "./components/InputStepper";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Data Input/InputStepper",
	component: InputStepper,
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
const DefaultInputStepper = (args) => {
	const [stepperValue, setStepperValue] = useState(args.value);
	return (
		<InputStepper
			{...args}
			value={stepperValue}
			onUp={() => setStepperValue(stepperValue + 1)}
			onDown={() => setStepperValue(stepperValue - 1)}
		/>
	);
};

const MinMaxInputStepper = (args) => {
	const [stepperValueMinMax, setStepperValueMinMax] = useState(args.value);

	return (
		<InputStepper
			{...args}
			value={stepperValueMinMax}
			onUp={() => setStepperValueMinMax(stepperValueMinMax + 1)}
			onDown={() => setStepperValueMinMax(stepperValueMinMax - 1)}
		/>
	);
};

// Input.disabled.displayName = "Input.disabled";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultInputStepper.bind({});
Default.args = {
	label: "Input Stepper",
	name: "inputstepper",
	value: 2,
};

export const MinMax = MinMaxInputStepper.bind({});
MinMax.args = {
	label: "Input Stepper Min Max",
	name: "inputstepperminmax",
	className: "!w-40",
	value: 3,
	min: 0,
	max: 5
};
