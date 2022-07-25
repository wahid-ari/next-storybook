import React from "react";
import { useState } from "react";

import Checkbox from "./components/Checkbox";
import Text from "./components/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Data Input/Checkbox",
	component: Checkbox,
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
const DefaultCheckbox = (args) => {
	const [uncheckedColor, setUncheckedColor] = useState([]);
	function handleUncheckedCheckboxChange(e) {
		e.persist();
		if (e.target.checked) {
			setUncheckedColor([...uncheckedColor, e.target.value]);
		} else {
			setUncheckedColor(
				uncheckedColor.filter((item) => item !== e.target.value)
			);
		}
	}
	return (
		<>
			<Text className="mb-4 font-medium">Unchecked Checkbox</Text>
			<Checkbox
				label="Red"
				name="red"
				value="red"
				onChange={handleUncheckedCheckboxChange}
				checked={uncheckedColor.includes("red")}
			/>
			<Checkbox
				label="Blue"
				name="blue"
				value="blue"
				onChange={handleUncheckedCheckboxChange}
				checked={uncheckedColor.includes("blue")}
			/>
			<Checkbox
				label="Green"
				name="green"
				value="green"
				onChange={handleUncheckedCheckboxChange}
				checked={uncheckedColor.includes("green")}
			/>
			<Text className="mb-4 text-sm font-medium !text-red-500">
				Checkbox :{" "}
				{uncheckedColor
					? uncheckedColor.map((item) => <span key={item}>{item}, </span>)
					: ""}
			</Text>
		</>
	);
};

const CheckedCheckbox = (args) => {
	const [checkedColor, setCheckedColor] = useState(["yellow", "pink"]);
	function handleCheckedCheckboxChange(e) {
		console.log(e);
		e.persist();
		if (e.target.checked) {
			setCheckedColor([...checkedColor, e.target.value]);
		} else {
			setCheckedColor(checkedColor.filter((item) => item !== e.target.value));
		}
	}
	return (
		<>
			<Text className="mb-4 font-medium">Checked Checkbox</Text>
			<Checkbox
				label="Yellow"
				name="yellow"
				value="yellow"
				onChange={handleCheckedCheckboxChange}
				checked={checkedColor.includes("yellow")}
			/>
			<Checkbox
				label="Purple"
				name="purple"
				value="purple"
				onChange={handleCheckedCheckboxChange}
				checked={checkedColor.includes("purple")}
			/>
			<Checkbox
				label="Pink"
				name="pink"
				value="pink"
				onChange={handleCheckedCheckboxChange}
				checked={checkedColor.includes("pink")}
			/>
			<Text className="mb-4 text-sm font-medium !text-red-500">
				Initial Checkbox :{" "}
				{checkedColor
					? checkedColor.map((item) => <span key={item}>{item}, </span>)
					: ""}
			</Text>
		</>
	);
};

// const DisabledInput = (args) => <Input.disabled {...args} />;

// Input.disabled.displayName = "Input.disabled";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultCheckbox.bind({});

export const Checked = CheckedCheckbox.bind({});

// export const DefaultValue = DefaultInput.bind({});
// DefaultValue.args = {
// 	label: "Default Value",
// 	type: "text",
// 	name: "name",
// 	value: "Default Value",
// };
