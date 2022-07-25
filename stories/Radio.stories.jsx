import React from "react";
import { useState } from "react";

import Radio from "./components/Radio";
import Text from "./components/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Data Input/Radio",
	component: Radio,
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
const DefaultRadio = (args) => {
	const [radioColor, setRadioColor] = useState();
	function handleRadioChange(e) {
		setRadioColor(e.target.value);
	}
	return (
		<>
			<Text className="mb-4 font-medium">Unchecked Radio</Text>
			<Radio
				label="Red"
				name="red"
				value="red"
				onChange={handleRadioChange}
				checked={radioColor == "red"}
			/>
			<Radio
				label="Blue"
				name="blue"
				value="blue"
				onChange={handleRadioChange}
				checked={radioColor == "blue"}
			/>
			<Text className="mb-4 text-sm font-medium !text-red-500">
				Radio : {radioColor ? radioColor : ""}
			</Text>
		</>
	);
};

const CheckedRadio = (args) => {
	const [checkedRadioColor, setCheckedRadioColor] = useState("purple");
	function handleCheckedRadioChange(e) {
		setCheckedRadioColor(e.target.value);
	}
	return (
		<>
			<Text className="mb-4 font-medium">Checked Radio</Text>
			<Radio
				label="Green"
				name="green"
				value="green"
				onChange={handleCheckedRadioChange}
				checked={checkedRadioColor == "green"}
			/>
			<Radio
				label="Purple"
				name="purple"
				value="purple"
				onChange={handleCheckedRadioChange}
				checked={checkedRadioColor == "purple"}
			/>
			<Text className="mb-4 text-sm font-medium !text-red-500">
				Initial Radio : {checkedRadioColor ? checkedRadioColor : ""}
			</Text>
		</>
	);
};

// const DisabledInput = (args) => <Input.disabled {...args} />;

// Input.disabled.displayName = "Input.disabled";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultRadio.bind({});

export const Checked = CheckedRadio.bind({});

// export const DefaultValue = DefaultInput.bind({});
// DefaultValue.args = {
// 	label: "Default Value",
// 	type: "text",
// 	name: "name",
// 	value: "Default Value",
// };