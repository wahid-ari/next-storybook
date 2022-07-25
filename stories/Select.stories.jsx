import React from "react";

import Select from "./components/Select";
const { Option, OptGroup } = Select;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Data Input/Select",
	component: Select,
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

const DefaultSelect = (args) => <Select {...args} />;

Option.displayName = "Option";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultSelect.bind({});
Default.args = {
	label: "Select",
	name: "select",
	children: (
		<>
			<Option value="red">Red</Option>
			<Option value="green">Green</Option>
			<Option value="blue">Blue</Option>
			<Option value="yellow">Yellow</Option>
			<Option value="purple">Purple</Option>
		</>
	),
};

export const Small = DefaultSelect.bind({});
Small.args = {
	label: "Select Small",
	name: "select",
	className: "w-32 text-xs",
	children: (
		<>
			<Option value="red">Red</Option>
			<Option value="green">Green</Option>
			<Option value="blue">Blue</Option>
			<Option value="yellow">Yellow</Option>
			<Option value="purple">Purple</Option>
		</>
	),
};

export const Large = DefaultSelect.bind({});
Large.args = {
	label: "Select Large",
	name: "select",
	className: "w-64 text-base",
	children: (
		<>
			<Option value="red">Red</Option>
			<Option value="green">Green</Option>
			<Option value="blue">Blue</Option>
			<Option value="yellow">Yellow</Option>
			<Option value="purple">Purple</Option>
		</>
	),
};

export const Group = DefaultSelect.bind({});
Group.args = {
	label: "Select Group",
	name: "selectgroup",
	children: (
		<>
			<OptGroup label="Primary">
				<Option value="red">Red</Option>
				<Option value="green">Green</Option>
				<Option value="blue">Blue</Option>
			</OptGroup>
			<OptGroup label="Secondary">
				<Option value="yellow">Yellow</Option>
				<Option value="purple">Purple</Option>
			</OptGroup>
		</>
	),
};
