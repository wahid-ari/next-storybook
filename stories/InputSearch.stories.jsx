import React from "react";
import { useState } from "react";

import InputSearch from "./components/InputSearch";
import Text from "./components/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Data Input/InputSearch",
	component: InputSearch,
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
const DefaultInputSearch = (args) => {
	const [inputSearch, setInputSearch] = useState();
	function handleInputSearchChange(e) {
		setInputSearch(e.target.value);
	}
	function handleInputSearchClick() {
		alert(inputSearch ? inputSearch : "Search Empty !");
	}
	return (
		<>
			<InputSearch
				label="Input Search"
				type="text"
				name="inputsearch"
				placeholder="Search"
				value={inputSearch}
				onChange={handleInputSearchChange}
				onClick={handleInputSearchClick}
			/>
			<Text className="mb-4 text-sm font-medium !text-red-500">
				{" "}
				Input Search : {inputSearch ? inputSearch : ""}{" "}
			</Text>
		</>
	);
};

// const DisabledInput = (args) => <Input.disabled {...args} />;

// Input.disabled.displayName = "Input.disabled";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultInputSearch.bind({});
Default.args = {
	label: "Input Search",
	type: "text",
	name: "inputsearch",
	placeholder: "Search",
};
