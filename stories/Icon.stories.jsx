import {
	BadgeCheckIcon,
	AcademicCapIcon,
	AdjustmentsIcon,
	AnnotationIcon,
	ArchiveIcon,
	BeakerIcon,
	BellIcon,
	BookmarkAltIcon,
	BriefcaseIcon,
	CameraIcon,
	CashIcon,
	ChartBarIcon,
	ChatAltIcon,
	ClipboardCheckIcon,
	ColorSwatchIcon,
	CreditCardIcon,
	CubeIcon,
	DatabaseIcon,
	DesktopComputerIcon,
	EmojiHappyIcon,
	FilmIcon,
	FireIcon,
	FolderOpenIcon,
	GiftIcon,
	GlobeIcon,
	InboxInIcon,
	LibraryIcon,
	LightBulbIcon,
	LightningBoltIcon,
	NewspaperIcon,
	PhotographIcon,
	TrashIcon,
} from "@heroicons/react/outline";
import React from "react";

// import Section from "./components/Section";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Utilities/Icon",
	// component: Section,
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
const DefaultIcon = (args) => <BadgeCheckIcon {...args} />;
const ExampleIcon = (args) => (
	<>
		<div className="flex gap-3 flex-wrap sm:w-80">
			<BadgeCheckIcon {...args} />
			<AcademicCapIcon {...args} />
			<AdjustmentsIcon {...args} />
			<AnnotationIcon {...args} />
			<ArchiveIcon {...args} />
			<BeakerIcon {...args} />
			<BellIcon {...args} />
			<BookmarkAltIcon {...args} />
			<BriefcaseIcon {...args} />
			<CameraIcon {...args} />
			<CashIcon {...args} />
			<ChartBarIcon {...args} />
			<ChatAltIcon {...args} />
			<ClipboardCheckIcon {...args} />
			<ColorSwatchIcon {...args} />
			<CreditCardIcon {...args} />
			<CubeIcon {...args} />
			<DatabaseIcon {...args} />
			<DesktopComputerIcon {...args} />
			<EmojiHappyIcon {...args} />
			<FilmIcon {...args} />
			<FireIcon {...args} />
			<FolderOpenIcon {...args} />
			<GiftIcon {...args} />
			<GlobeIcon {...args} />
			<InboxInIcon {...args} />
			<LibraryIcon {...args} />
			<LightBulbIcon {...args} />
			<LightningBoltIcon {...args} />
			<NewspaperIcon {...args} />
			<PhotographIcon {...args} />
			<TrashIcon {...args} />
		</div>
		<a
			href="https://heroicons.com/"
			target="_blank"
			rel="noreferrer"
			className="text-sky-600 font-medium text-sm hover:text-sky-700 transition-all mt-4 block"
		>
			Heroicons
		</a>
	</>
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = DefaultIcon.bind({});
Default.args = {
	className: "w-10 h-10 text-neutral-700 dark:text-gray-300",
};

export const Small = DefaultIcon.bind({});
Small.args = {
	className: "w-6 h-6 text-neutral-700 dark:text-gray-300",
};

export const Large = DefaultIcon.bind({});
Large.args = {
	className: "w-14 h-14 text-neutral-700 dark:text-gray-300",
};

export const Example = ExampleIcon.bind({});
Example.args = {
	className: "w-7 h-7 text-neutral-700 dark:text-gray-300",
};
