import { DocumentTextIcon, PhotographIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import { useState } from "react";

import FileInput from "./components/FileInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Data Input/FileInput",
	component: FileInput,
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
const DefaultFileInput = (args) => {
	const [file, setFile] = useState();
	function handleFileChange(e) {
		setFile(e.target.files[0]);
	}
	return (
		<FileInput
			{...args}
			value={file ? file.name : ""}
			onChange={handleFileChange}
			icon={
				<DocumentTextIcon
					className="w-6 h-6 text-gray-400 mr-1"
					strokeWidth="1"
				/>
			}
		/>
	);
};

const FileInputImage = (args) => {
	const [image, setImage] = useState();
	const [imageURL, setImageURL] = useState();
	function handleImageChange(e) {
		setImage(e.target.files[0]);
		setImageURL(URL.createObjectURL(e.target.files[0]));
	}
	return (
		<>
			<FileInput
				{...args}
				onChange={handleImageChange}
				icon={
					<PhotographIcon
						className="w-6 h-6 text-gray-400 mr-1"
						strokeWidth="1"
					/>
				}
			/>
			{imageURL ? (
				<div className="relative w-48 h-36 mb-4">
					<Image
						alt="image"
						src={imageURL}
						layout="fill"
						className="rounded-lg"
					/>
				</div>
			) : (
				""
			)}
		</>
	);
};

// const DisabledInput = (args) => <Input.disabled {...args} />;

// Input.disabled.displayName = "Input.disabled";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultFileInput.bind({});
Default.args = {
	label: "File PDF",
	accept: ".pdf",
	name: "file_pdf",
	inputLabel: "Select file (.pdf)",
};

export const FileImage = FileInputImage.bind({});
FileImage.args = {
	label: "File Image",
	accept: ".png, .jpg, .jpeg",
	name: "file_image",
	inputLabel: "Select image (.png, .jpg, .jpeg)",
};
