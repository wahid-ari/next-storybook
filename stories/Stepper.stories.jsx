import React from "react";
import { useState } from "react";

import Stepper from "./components/Stepper";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Displays/Stepper",
	component: Stepper,
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
const DefaultStepper = (args) => {
	const [currentStep, setCurrentStep] = useState(1);
	const stepArray = ["First", "Second", "Complete"];
	function handleClick(clickType) {
		let newStep = currentStep;
		clickType == "next" ? newStep++ : newStep--;
		// Check if steps are within the boundary
		if (newStep > 0 && newStep <= stepArray.length) {
			setCurrentStep(newStep);
		}
	}
	
	return (
		<>
			<div className="container horizontal mt-5 mb-12">
				<Stepper steps={stepArray} currentStepNumber={currentStep} />
			</div>
			<div className="container flex justify-around my-8 ">
				<button
					onClick={() => handleClick()}
					className="transition duration-300 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded"
				>
					{" "}
					Previous{" "}
				</button>
				<p className="dark:text-white text-xl">{currentStep}</p>
				<button
					onClick={() => handleClick("next")}
					className="transition duration-300 bg-teal-600 hover:bg-teal-700 text-white text-sm px-3 py-1 rounded"
				>
					{" "}
					Next{" "}
				</button>
			</div>
		</>
	);
};

// Input.disabled.displayName = "Input.disabled";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultStepper.bind({});
