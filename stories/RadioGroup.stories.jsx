import React from "react";

import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import Text from "./components/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Headless UI/Radio Group",
	component: RadioGroup,
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
const plans = [
	{
		name: "Asus",
		ram: "12 GB",
		cpus: "6 CPUs",
		disk: "160 GB SSD",
	},
	{
		name: "Apple",
		ram: "16 GB",
		cpus: "8 CPUs",
		disk: "512 GB SSD",
	},
	{
		name: "Lenovo",
		ram: "32 GB",
		cpus: "12 CPUs",
		disk: "1024 GB SSD",
	},
];

const DefaultRadioGroup = (args) => {
	const [selected, setSelected] = useState(plans[0]);
	return (
		<div className="w-full px-4 py-16">
			<div className="mx-auto w-full max-w-md">
				<RadioGroup value={selected} onChange={setSelected}>
					<RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
					<div className="space-y-2">
						{plans.map((plan) => (
							<RadioGroup.Option
								key={plan.name}
								value={plan}
								className={({ checked }) =>
									`${
										checked ? "bg-teal-600 text-white" : "bg-white dark:bg-neutral-800"
									} relative flex cursor-pointer rounded-lg px-5 py-4 shadow focus:outline-none`
								}
							>
								{({ active, checked }) => (
									<>
										<div className="flex w-full items-center justify-between">
											<div className="flex items-center">
												<div className="text-sm">
													<RadioGroup.Label
														as="p"
														className={`font-medium  ${
															checked ? "text-white" : "text-gray-900 dark:text-white"
														}`}
													>
														{plan.name}
													</RadioGroup.Label>
													<RadioGroup.Description
														as="span"
														className={`inline ${
															checked ? "text-teal-100" : "text-gray-500 dark:text-gray-400"
														}`}
													>
														<span>{plan.ram} / </span>
														<span>{plan.cpus} / </span>
														<span>{plan.disk}</span>
													</RadioGroup.Description>
												</div>
											</div>
											{checked && (
												<div className="shrink-0 text-white">
													<CheckIcon className="h-6 w-6" />
												</div>
											)}
										</div>
									</>
								)}
							</RadioGroup.Option>
						))}
					</div>
				</RadioGroup>
			</div>
			<Text className="mx-auto flex justify-center my-3 !text-sm font-medium !text-red-500">
				{" "}
				Selected : {selected ? selected.name : ""}{" "}
			</Text>
		</div>
	);
};

const sizes = [
	{ name: "S", disabled: true },
	{ name: "M", disabled: true },
	{ name: "L", disabled: true },
	{ name: "XL", disabled: false },
];

const RadioBox = (args) => {
	const [selectedSize, setSelectedSize] = useState(sizes[2]);
	return (
		<>
			<RadioGroup
				value={selectedSize}
				onChange={setSelectedSize}
				className="mt-4"
			>
				<RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
				<div className="flex items-center space-x-3">
					{sizes.map((option) => (
						<RadioGroup.Option
							key={option.name}
							value={option}
							disabled={!option.disabled}
							className={`
						${
							option.disabled
								? "bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-200 cursor-pointer"
								: "bg-gray-50 dark:bg-neutral-900 text-gray-300 dark:text-gray-600 cursor-not-allowed"
						}
						relative border dark:border-neutral-700 rounded-md py-1.5 px-3 flex justify-center text-sm font-medium hover:bg-gray-100 dark:hover:bg-neutral-800
				`}
						>
							{({ checked }) => (
								<>
									<RadioGroup.Label as="p">{option.name}</RadioGroup.Label>
									{option.disabled ? (
										<div
											className={`${
												checked && "border-2 border-blue-500"
											} absolute -inset-px rounded-md pointer-events-none`}
											aria-hidden="true"
										/>
									) : (
										<div
											aria-hidden="true"
											className="absolute inset-px rounded-md pointer-events-none"
										>
											<svg
												className="absolute inset-0 w-full h-full text-gray-200 dark:text-gray-600 stroke-1"
												viewBox="0 0 100 100"
												preserveAspectRatio="none"
												stroke="currentColor"
											>
												<line
													x1={100}
													y1={100}
													x2={0}
													y2={0}
													vectorEffect="non-scaling-stroke"
												/>
											</svg>
										</div>
									)}
								</>
							)}
						</RadioGroup.Option>
					))}
				</div>
			</RadioGroup>
			<Text className="my-3 !text-sm font-medium !text-red-500">
				{" "}
				Selected : {selectedSize ? selectedSize.name : ""}{" "}
			</Text>
		</>
	);
};

const product = {
	colors: [
		{ name: "Red", class: "bg-red-500" },
		{ name: "Green", class: "bg-teal-500" },
		{ name: "Blue", class: "bg-blue-500" },
	],
};

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const ColorBox = (args) => {
	const [selectedColor, setSelectedColor] = useState(product.colors[0]);
	function handleRadioColorChange(e) {
		setSelectedColor(e);
	}
	return (
		<>
			<RadioGroup
				value={selectedColor}
				onChange={handleRadioColorChange}
				className="mt-4"
			>
				<RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
				<div className="flex items-center space-x-3">
					{product.colors.map((color) => (
						<RadioGroup.Option
							key={color.name}
							value={color}
							className={({ active, checked }) =>
								classNames(
									active && checked ? "ring-2 ring-gray-500" : "",
									!active && checked ? "ring-2 ring-gray-500" : "",
									"relative p-0.5 rounded-full flex items-center justify-center cursor-pointer"
								)
							}
						>
							<RadioGroup.Label as="p" className="sr-only">
								{color.name}
							</RadioGroup.Label>
							<span
								aria-hidden="true"
								className={`${color.class} h-7 w-7 rounded-full`}
							/>
						</RadioGroup.Option>
					))}
				</div>
			</RadioGroup>
			<Text className="my-3 !text-sm font-medium !text-red-500">
				{" "}
				Selected : {selectedColor ? selectedColor.name : ""}{" "}
			</Text>
		</>
	);
};

RadioGroup.displayName = "RadioGroup";
RadioGroup.Label.displayName = "RadioGroup.Label";
RadioGroup.Option.displayName = "RadioGroup.Option";
RadioGroup.Description.displayName = "RadioGroup.Description";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultRadioGroup.bind({});
export const SizeBox = RadioBox.bind({});
export const ColorsBox = ColorBox.bind({});
