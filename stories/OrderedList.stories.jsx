import { CheckCircleIcon } from "@heroicons/react/outline";
import React from "react";

import OrderedList from "./components/OrderedList";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Displays/OrderedList",
	component: OrderedList,
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
const DefaultOrderedList = (args) => {
	return (
		<div className="mx-2">
			<OrderedList bullet inside className="my-2">
				<OrderedList.item>
					Incididunt anim nulla mollit amet commodo irure sit fugiat.
				</OrderedList.item>
				<OrderedList.item>
					Incididunt anim nulla mollit amet commodo irure sit fugiat.
				</OrderedList.item>
			</OrderedList>
			<OrderedList inside className="my-2">
				<OrderedList.item>
					Incididunt anim nulla mollit amet commodo irure sit fugiat.
				</OrderedList.item>
				<OrderedList.item>
					Incididunt anim nulla mollit amet commodo irure sit fugiat.
				</OrderedList.item>
			</OrderedList>
			<OrderedList bullet className="my-2">
				<OrderedList.item>
					Incididunt anim nulla mollit amet commodo irure sit fugiat.
				</OrderedList.item>
				<OrderedList.item>
					Incididunt anim nulla mollit amet commodo irure sit fugiat.
				</OrderedList.item>
			</OrderedList>
			<OrderedList className="my-2">
				<OrderedList.item className="flex items-center gap-x-2">
					<CheckCircleIcon className="w-5 h-5 text-teal-500" />
					Incididunt anim nulla mollit amet commodo irure sit fugiat.
				</OrderedList.item>
				<OrderedList.item className="flex items-center gap-x-2">
					<CheckCircleIcon className="w-5 h-5 text-teal-500" />
					Incididunt anim nulla mollit amet commodo irure sit fugiat.
				</OrderedList.item>
			</OrderedList>
		</div>
	);
};

const itemOrderedList = (args) => {
	return (
		<div className="mx-2">
			<OrderedList.item>
				{args.children}
			</OrderedList.item>
		</div>
	);
};

OrderedList.item.displayName = "OrderedList.item";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultOrderedList.bind({});

export const Item = itemOrderedList.bind({});
Item.args = {
	children: "Incididunt anim nulla mollit amet commodo irure sit fugiat."
};
