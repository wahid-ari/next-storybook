import React from "react";

import TableSimple from "./components/TableSimple";
const { Tr, Td } = TableSimple;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Data Display/TableSimple",
	component: TableSimple,
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

const DefaultTableSimple = (args) => {
	return (
		<TableSimple
			{...args}
			head={
				<>
					<TableSimple.Td small bordered={args.bordered}>
						No
					</TableSimple.Td>
					<TableSimple.Td bordered={args.bordered}>Column 1</TableSimple.Td>
					<TableSimple.Td bordered={args.bordered}>Column 2</TableSimple.Td>
					<TableSimple.Td bordered={args.bordered}>Column 3</TableSimple.Td>
					<TableSimple.Td bordered={args.bordered}>Column 4</TableSimple.Td>
					<TableSimple.Td bordered={args.bordered}>Column 5</TableSimple.Td>
				</>
			}
		>
			{[0, 1, 2, 3, 4].map((item, index) => {
				return (
					<TableSimple.Tr key={index}>
						<TableSimple.Td small bordered={args.bordered}>
							{index + 1}
						</TableSimple.Td>
						<TableSimple.Td bordered={args.bordered}>
							Row {index + 1} Column 1
						</TableSimple.Td>
						<TableSimple.Td bordered={args.bordered}>
							Row {index + 1} Column 2
						</TableSimple.Td>
						<TableSimple.Td bordered={args.bordered}>
							Row {index + 1} Column 3
						</TableSimple.Td>
						<TableSimple.Td bordered={args.bordered}>
							Row {index + 1} Column 4
						</TableSimple.Td>
						<TableSimple.Td bordered={args.bordered}>
							Row {index + 1} Column 5
						</TableSimple.Td>
					</TableSimple.Tr>
				);
			})}
		</TableSimple>
	);
};

const TableSimpleBordered = (args) => {
	return (
		<TableSimple
			{...args}
			head={
				<>
					<TableSimple.Td small bordered={args.bordered}>
						No
					</TableSimple.Td>
					<TableSimple.Td bordered={args.bordered}>Column 1</TableSimple.Td>
					<TableSimple.Td bordered={args.bordered}>Column 2</TableSimple.Td>
					<TableSimple.Td bordered={args.bordered}>Column 3</TableSimple.Td>
					<TableSimple.Td bordered={args.bordered}>Column 4</TableSimple.Td>
					<TableSimple.Td bordered={args.bordered}>Column 5</TableSimple.Td>
				</>
			}
		>
			{[0, 1, 2, 3, 4].map((item, index) => {
				return (
					<TableSimple.Tr key={index}>
						<TableSimple.Td small bordered={args.bordered}>
							{index + 1}
						</TableSimple.Td>
						<TableSimple.Td bordered={args.bordered}>
							Row {index + 1} Column 1
						</TableSimple.Td>
						<TableSimple.Td bordered={args.bordered}>
							Row {index + 1} Column 2
						</TableSimple.Td>
						<TableSimple.Td bordered={args.bordered}>
							Row {index + 1} Column 3
						</TableSimple.Td>
						<TableSimple.Td bordered={args.bordered}>
							Row {index + 1} Column 4
						</TableSimple.Td>
						<TableSimple.Td bordered={args.bordered}>
							Row {index + 1} Column 5
						</TableSimple.Td>
					</TableSimple.Tr>
				);
			})}
		</TableSimple>
	);
};

Tr.displayName = "TableSimple.Tr";
Td.displayName = "TableSimple.Td";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultTableSimple.bind({});
Default.args = {
	className: "mt-4",
	bordered: false,
};

export const Bordered = TableSimpleBordered.bind({});
Bordered.args = {
	className: "mt-8",
	bordered: true,
};
