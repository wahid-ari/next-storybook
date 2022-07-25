import React from "react";

import Accordion from "./components/Accordion";
import Text from "./components/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Headless/Accordion",
	component: Accordion,
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

const DefaultAccordion = (args) => (
	<Accordion {...args}>
		<Text>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
			voluptatum porro quo sed quaerat suscipit tenetur! Laborum deleniti quod
			iste delectus amet? Asperiores facere necessitatibus facilis ut distinctio
			placeat dolorem.
		</Text>
	</Accordion>
);
const MultipleAccordion = (args) => (
	<>
		<Accordion {...args} title="Accordion Title A">
			<Text>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
				voluptatum porro quo sed quaerat suscipit tenetur! Laborum deleniti quod
				iste delectus amet? Asperiores facere necessitatibus facilis ut
				distinctio placeat dolorem.
			</Text>
		</Accordion>
		<Accordion {...args} title="Accordion Title B">
			<Text>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
				voluptatum porro quo sed quaerat suscipit tenetur! Laborum deleniti quod
				iste delectus amet? Asperiores facere necessitatibus facilis ut
				distinctio placeat dolorem.
			</Text>
		</Accordion>
	</>
);

// Option.displayName = "Option";

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultAccordion.bind({});
Default.args = {
	title: "Accordion Title",
	className: "mt-4",
};

export const Multiple = MultipleAccordion.bind({});
