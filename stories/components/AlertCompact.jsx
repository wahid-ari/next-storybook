import React from "react";
import PropTypes from "prop-types";
import {
	CheckCircleIcon,
	ExclamationCircleIcon,
	ExclamationIcon,
	InformationCircleIcon,
} from "@heroicons/react/outline";

/**
 * Primary UI component for user interaction
 */

export default function AlertCompact({ className, title, children }) {
	return (
		<div
			className={`${className} flex rounded-md shadow-md max-w-xs dark:bg-[#202020]`}
		>
			<div className="bg-sky-500 flex items-center px-2 rounded-l-md">
				<InformationCircleIcon className="w-7 h-7 text-white" />
			</div>
			<div className="py-1.5 px-3 ">
				<p className="text-sky-500 font-medium text-sm">{title}</p>
				<p className="text-neutral-600 dark:text-gray-200">{children}</p>
			</div>
		</div>
	);
}

AlertCompact.success = ({ className, title, children }) => {
	return (
		<div
			className={`${className} flex rounded-md shadow-md max-w-xs dark:bg-[#202020]`}
		>
			<div className="bg-emerald-500 flex items-center px-2 rounded-l-md">
				<CheckCircleIcon className="w-7 h-7 text-white" />
			</div>
			<div className="py-1.5 px-3 ">
				<p className="text-emerald-500 font-medium text-sm">{title}</p>
				<p className="text-neutral-600 dark:text-gray-200">{children}</p>
			</div>
		</div>
	);
};

AlertCompact.warning = ({ className, title, children }) => {
	return (
		<div
			className={`${className} flex rounded-md shadow-md max-w-xs dark:bg-[#202020]`}
		>
			<div className="bg-yellow-500 flex items-center px-2 rounded-l-md">
				<ExclamationIcon className="w-7 h-7 text-white" />
			</div>
			<div className="py-1.5 px-3 ">
				<p className="text-yellow-500 font-medium text-sm">{title}</p>
				<p className="text-neutral-600 dark:text-gray-200">{children}</p>
			</div>
		</div>
	);
};

AlertCompact.danger = ({ className, title, children }) => {
	return (
		<div
			className={`${className} flex rounded-md shadow-md max-w-xs dark:bg-[#202020]`}
		>
			<div className="bg-red-500 flex items-center px-2 rounded-l-md">
				<ExclamationCircleIcon className="w-7 h-7 text-white" />
			</div>
			<div className="py-1.5 px-3 ">
				<p className="text-red-500 font-medium text-sm">{title}</p>
				<p className="text-neutral-600 dark:text-gray-200">{children}</p>
			</div>
		</div>
	);
};

AlertCompact.infoLeft = ({ className, title, children }) => {
	return (
		<div
			className={`${className} border-l-8 border-sky-500 rounded-md shadow-md max-w-xs dark:bg-[#202020]`}
		>
			<div className="py-1.5 px-3 ">
				<p className="text-sky-500 font-medium text-sm">{title}</p>
				<p className="text-neutral-600 dark:text-gray-200">{children}</p>
			</div>
		</div>
	);
};

AlertCompact.successLeft = ({ className, title, children }) => {
	return (
		<div
			className={`${className} border-l-8 border-emerald-500 rounded-md shadow-md max-w-xs dark:bg-[#202020]`}
		>
			<div className="py-1.5 px-3 ">
				<p className="text-emerald-500 font-medium text-sm">{title}</p>
				<p className="text-neutral-600 dark:text-gray-200">{children}</p>
			</div>
		</div>
	);
};

AlertCompact.warningLeft = ({ className, title, children }) => {
	return (
		<div
			className={`${className} border-l-8 border-yellow-500 rounded-md shadow-md max-w-xs dark:bg-[#202020]`}
		>
			<div className="py-1.5 px-3 ">
				<p className="text-yellow-500 font-medium text-sm">{title}</p>
				<p className="text-neutral-600 dark:text-gray-200">{children}</p>
			</div>
		</div>
	);
};

AlertCompact.dangerLeft = ({ className, title, children }) => {
	return (
		<div
			className={`${className} border-l-8 border-red-500 rounded-md shadow-md max-w-xs dark:bg-[#202020]`}
		>
			<div className="py-1.5 px-3 ">
				<p className="text-red-500 font-medium text-sm">{title}</p>
				<p className="text-neutral-600 dark:text-gray-200">{children}</p>
			</div>
		</div>
	);
};

AlertCompact.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
};

AlertCompact.defaultProps = {
	className: "",
	title: "Alert Title",
	children: "Alert Text",
};
