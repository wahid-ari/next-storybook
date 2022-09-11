import React, { useState } from "react";

import Table from "./components/Table";
const { Tr, Td } = Table;
import Badge from "./components/Badge";
import { tabledata } from "./data/TableData";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Data Display/Table",
	component: Table,
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

const DefaultTable = (args) => {
	return (
		<Table
			{...args}
			head={
				<>
					<Table.Td small>No</Table.Td>
					<Table.Td>Dark</Table.Td>
					<Table.Td>Red</Table.Td>
					<Table.Td>Blue</Table.Td>
					<Table.Td>Orange</Table.Td>
					<Table.Td>Green</Table.Td>
				</>
			}
		>
			{[0, 1, 2, 3, 4].map((item, index) => {
				return (
					<Table.Tr key={index}>
						<Table.Td small>{index + 1}</Table.Td>
						<Table.Td>
							<Badge>Row {index + 1} Blue</Badge>
						</Table.Td>
						<Table.Td>
							<Badge.red>Row {index + 1} Red</Badge.red>
						</Table.Td>
						<Table.Td>
							<Badge.dark>Row {index + 1} Dark</Badge.dark>
						</Table.Td>
						<Table.Td>
							<Badge.orange>Row {index + 1} Orange</Badge.orange>
						</Table.Td>
						<Table.Td>
							<Badge.green>Row {index + 1} Green</Badge.green>
						</Table.Td>
					</Table.Tr>
				);
			})}
		</Table>
	);
};

const TableFunctional = (args) => {
	const [slicedTableData, setSlicedTableData] = useState(tabledata.slice(0, 5));
	const [currentPage, setCurrentPage] = useState(1);
	const [startIndexSlice, setStartIndexSlice] = useState(0);
	const [itemsToSlice, setItemsToSlice] = useState(5);

	function onNext() {
		if (currentPage < 4) {
			setCurrentPage(currentPage + 1);
			setStartIndexSlice(startIndexSlice + 5);
			setItemsToSlice(itemsToSlice + 5);
			setSlicedTableData(
				tabledata.slice(startIndexSlice + 5, itemsToSlice + 5)
			);
		}
	}

	function onPrev() {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
			setStartIndexSlice(startIndexSlice - 5);
			setItemsToSlice(itemsToSlice - 5);
			setSlicedTableData(
				tabledata.slice(startIndexSlice - 5, itemsToSlice - 5)
			);
		}
	}
	return (
		<Table
			totalPage={4}
			totalData={20}
			currentPage={currentPage}
			onPrev={onPrev}
			onNext={onNext}
			head={
				<>
					<Table.Td small>No</Table.Td>
					<Table.Td>Email</Table.Td>
					<Table.Td>Name</Table.Td>
					<Table.Td>Age</Table.Td>
					<Table.Td>Gender</Table.Td>
					<Table.Td>Company</Table.Td>
					<Table.Td>Phone</Table.Td>
				</>
			}
		>
			{slicedTableData.map((item, index) => {
				return (
					<Table.Tr key={index}>
						<Table.Td small>{index + 1}</Table.Td>
						<Table.Td>{item.email}</Table.Td>
						<Table.Td>{item.name}</Table.Td>
						<Table.Td>{item.age}</Table.Td>
						<Table.Td>
							{item.gender == "male" ? (
								<Badge.red>{item.gender}</Badge.red>
							) : (
								<Badge>{item.gender}</Badge>
							)}
						</Table.Td>
						<Table.Td>{item.company}</Table.Td>
						<Table.Td>{item.phone}</Table.Td>
					</Table.Tr>
				);
			})}
		</Table>
	);
};

Tr.displayName = "Table.Tr";
Td.displayName = "Table.Td";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultTable.bind({});
Default.args = {
	className: "mt-4",
	totalPage: 5,
	totalData: 10,
	currentPage: 1,
};

export const Functional = TableFunctional.bind({});
