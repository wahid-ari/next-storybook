import React from "react";

import BackToTop from "./components/BackToTop";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Utilities/BackToTop",
	component: BackToTop,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	// argTypes: {
	// 	className: { control: "className" },
	// },
	// argTypes: {
	// 	disabled: { control: "boolean" },
	// 	pills: { control: "boolean", options: [true, false] },
	// },
};

// Image.displayName = "Image";

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const DefaultBackToTop = (args) => (
	<div className="h-full">
		<p className="dark:text-white mb-2 text-lg font-medium">Scroll Down To Show Back To Top Button</p>
		<p className="dark:text-white mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos veritatis quis recusandae? Voluptas natus esse voluptatum asperiores assumenda facilis, nobis laudantium dignissimos vel consequuntur error excepturi eaque id, dicta nulla?</p>
		<p className="dark:text-white mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos veritatis quis recusandae? Voluptas natus esse voluptatum asperiores assumenda facilis, nobis laudantium dignissimos vel consequuntur error excepturi eaque id, dicta nulla?</p>
		<p className="dark:text-white mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos veritatis quis recusandae? Voluptas natus esse voluptatum asperiores assumenda facilis, nobis laudantium dignissimos vel consequuntur error excepturi eaque id, dicta nulla?</p>
		<p className="dark:text-white mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos veritatis quis recusandae? Voluptas natus esse voluptatum asperiores assumenda facilis, nobis laudantium dignissimos vel consequuntur error excepturi eaque id, dicta nulla?</p>
		<p className="dark:text-white mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos veritatis quis recusandae? Voluptas natus esse voluptatum asperiores assumenda facilis, nobis laudantium dignissimos vel consequuntur error excepturi eaque id, dicta nulla?</p>
		<p className="dark:text-white mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos veritatis quis recusandae? Voluptas natus esse voluptatum asperiores assumenda facilis, nobis laudantium dignissimos vel consequuntur error excepturi eaque id, dicta nulla?</p>
		<p className="dark:text-white mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos veritatis quis recusandae? Voluptas natus esse voluptatum asperiores assumenda facilis, nobis laudantium dignissimos vel consequuntur error excepturi eaque id, dicta nulla?</p>
		<p className="dark:text-white mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos veritatis quis recusandae? Voluptas natus esse voluptatum asperiores assumenda facilis, nobis laudantium dignissimos vel consequuntur error excepturi eaque id, dicta nulla?</p>
		<p className="dark:text-white mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos veritatis quis recusandae? Voluptas natus esse voluptatum asperiores assumenda facilis, nobis laudantium dignissimos vel consequuntur error excepturi eaque id, dicta nulla?</p>
		<p className="dark:text-white mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos veritatis quis recusandae? Voluptas natus esse voluptatum asperiores assumenda facilis, nobis laudantium dignissimos vel consequuntur error excepturi eaque id, dicta nulla?</p>
		<p className="dark:text-white mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos veritatis quis recusandae? Voluptas natus esse voluptatum asperiores assumenda facilis, nobis laudantium dignissimos vel consequuntur error excepturi eaque id, dicta nulla?</p>
		<p className="dark:text-white mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos veritatis quis recusandae? Voluptas natus esse voluptatum asperiores assumenda facilis, nobis laudantium dignissimos vel consequuntur error excepturi eaque id, dicta nulla?</p>
		<p className="dark:text-white mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos veritatis quis recusandae? Voluptas natus esse voluptatum asperiores assumenda facilis, nobis laudantium dignissimos vel consequuntur error excepturi eaque id, dicta nulla?</p>
		<p className="dark:text-white mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos veritatis quis recusandae? Voluptas natus esse voluptatum asperiores assumenda facilis, nobis laudantium dignissimos vel consequuntur error excepturi eaque id, dicta nulla?</p>
		<BackToTop {...args} />
	</div>
);

export const Default = DefaultBackToTop.bind({});
