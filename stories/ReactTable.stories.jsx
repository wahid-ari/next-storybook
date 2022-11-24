import React, {useMemo, useRef } from "react";

import ReactTable from "./components/ReactTable";
import Badge from "./components/Badge";
import { tabledata } from "./data/TableData";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Data Display/ReactTable",
	component: ReactTable,
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

const DefaultReactTable = (args) => {
	const columns = useMemo(
		() => [
			{
				Header: "Id",
				accessor: "id",
				width: 300,
			},
			{
				Header: "Email",
				accessor: "email",
				width: 300,
			},
			{
				Header: "Name",
				accessor: "name",
				width: 300,
			},
			{
				Header: "Age",
				accessor: "age",
				width: 300,
			},
			{
				Header: "Gender",
				accessor: "gender",
				Cell: (row) => {
					return row.value == "male" ? (
						<Badge.green>Male</Badge.green>
					) : (
						<Badge.red>Female</Badge.red>
					);
				},
				width: 300,
			},
			{
				Header: "Company",
				accessor: "company",
				width: 300,
			},
			{
				Header: "Phone",
				accessor: "phone",
				disableSortBy: true,
				width: 300,
			},
			// {
			// 	Header: 'Ukuran',
			// 	accessor: 'size',
			// 	Cell: (row) => {
			// 		return <div className="size">{row.value}</div>;
			// 	},
			// 	width: 200,
			// },
			// {
			// 	Header: 'Harga',
			// 	accessor: 'price',
			// 	Cell: (row) => {
			// 		return (
			// 			<div className="price">
			// 				{row.value?.length > 0 ? (
			// 					<>
			// 						<span>Rp </span>{' '}
			// 						<span>{Number(row.value).toLocaleString('id-ID')}</span>{' '}
			// 					</>
			// 				) : (
			// 					row.value
			// 				)}
			// 			</div>
			// 		);
			// 	},
			// 	width: 400,
			// },
			// {
			// 	Header: "Date",
			// 	accessor: "date",
			// 	Cell: (row) => {
			// 		return convertDate(row.value);
			// 	},
			// 	width: 400,
			// },
			// {
			// 	Header: "Time",
			// 	accessor: "timestamp",
			// 	Cell: (row) => {
			// 		return convertTime(row.value);
			// 	},
			// 	disableSortBy: true,
			// 	width: 400,
			// },
		],
		[]
	);
	const tableInstance = useRef(null);
	return (
		<>
			<label
				htmlFor="caridata"
				className="block font-medium text-sm text-neutral-800 dark:text-gray-200"
			>
				Cari Data
			</label>
			<input
				label="Cari Data"
				id="caridata"
				name="caridata"
				placeholder="Cari Data"
				className="text-sm transition-all w-full px-3 py-[0.6rem] rounded-md mt-2
          dark:text-white bg-white dark:bg-neutral-900  
          border border-gray-300 dark:border-neutral-700 
          focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
				onChange={(e) => {
					tableInstance.current.setGlobalFilter(e.target.value);
				}}
			/>

			<ReactTable
				columns={columns}
				data={tabledata}
				ref={tableInstance}
				bordered={args.bordered}
				className={args.className}
			/>
		</>
	);
};

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultReactTable.bind({});
Default.args = {
	className: "mt-8",
	bordered: false,
};
