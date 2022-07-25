import { PhotographIcon, TrashIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";

import FileInputLarge from "./components/FileInputLarge";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Data Input/InputImageMultiple",
	component: FileInputLarge,
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
const FileInputLargeImageMultiple = (args) => {
	const [images, setImages] = useState([]);
	const [imagesURL, setImagesURL] = useState([]);
	function handleMultipleImageChange(e) {
		setImages([...e.target.files]);
	}

	useEffect(() => {
		const newImageURLs = [];
		images.forEach((image) => newImageURLs.push(URL.createObjectURL(image)));
		setImagesURL(newImageURLs);
	}, [images]);

	function deleteImage(id) {
		const filtered = images.filter((item, index) => index !== id);
		setImages(filtered);
	}
	return (
		<>
			<FileInputLarge
				{...args}
				onChange={handleMultipleImageChange}
				icon={
					<PhotographIcon
						className="w-8 h-8 text-gray-400 mr-1"
						strokeWidth="1"
					/>
				}
				multiple
			/>
			{imagesURL ? (
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
					{imagesURL.map((image, id) => (
						<div key={id} className="relative h-36 md:h-40 w-full">
							<Image
								src={image}
								alt="image"
								layout="fill"
								className="rounded-lg"
							/>
							<button
								onClick={() => deleteImage(id)}
								className="absolute top-0 right-0 m-1 text-red-500 hover:text-red-600 bg-black bg-opacity-30 backdrop-blur-lg p-1.5 rounded-full transition-all"
							>
								<TrashIcon className="w-4 h-4" />
							</button>
						</div>
					))}
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
export const FileImageMultiple = FileInputLargeImageMultiple.bind({});
FileImageMultiple.args = {
	label: "File Image Multiple",
	accept: ".png, .jpg, .jpeg",
	name: "file_image",
	inputLabel: "Select image (.png, .jpg, .jpeg)",
};
