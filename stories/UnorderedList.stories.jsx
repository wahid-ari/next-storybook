import { CheckCircleIcon } from "@heroicons/react/outline";
import React from "react";

import UnorderedList from "./components/UnorderedList";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Displays/UnorderedList",
	component: UnorderedList,
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
const DefaultUnorderedList = (args) => {
	return (
		<div className="mx-2">
			<UnorderedList bullet inside className="my-2">
				<UnorderedList.item>
					Incididunt anim nulla mollit amet commodo irure sit fugiat.
				</UnorderedList.item>
				<UnorderedList.item>
					Incididunt anim nulla mollit amet commodo irure sit fugiat.
				</UnorderedList.item>
			</UnorderedList>
			<UnorderedList inside className="my-2">
				<UnorderedList.item>
					Incididunt anim nulla mollit amet commodo irure sit fugiat.
				</UnorderedList.item>
				<UnorderedList.item>
					Incididunt anim nulla mollit amet commodo irure sit fugiat.
				</UnorderedList.item>
			</UnorderedList>
			<UnorderedList bullet className="my-2">
				<UnorderedList.item>
					Incididunt anim nulla mollit amet commodo irure sit fugiat.
				</UnorderedList.item>
				<UnorderedList.item>
					Incididunt anim nulla mollit amet commodo irure sit fugiat.
				</UnorderedList.item>
			</UnorderedList>
			<UnorderedList className="my-2">
				<UnorderedList.item className="flex items-center gap-x-2">
					<CheckCircleIcon className="w-5 h-5 text-teal-500" />
					Incididunt anim nulla mollit amet commodo irure sit fugiat.
				</UnorderedList.item>
				<UnorderedList.item className="flex items-center gap-x-2">
					<CheckCircleIcon className="w-5 h-5 text-teal-500" />
					Incididunt anim nulla mollit amet commodo irure sit fugiat.
				</UnorderedList.item>
			</UnorderedList>
		</div>
	);
};

const itemUnorderedList = (args) => {
	return (
		<div className="mx-2">
			<UnorderedList.item>
				{args.children}
			</UnorderedList.item>
		</div>
	);
};

UnorderedList.item.displayName = "UnorderedList.item";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultUnorderedList.bind({});

export const Item = itemUnorderedList.bind({});
Item.args = {
	children: "Incididunt anim nulla mollit amet commodo irure sit fugiat."
};
