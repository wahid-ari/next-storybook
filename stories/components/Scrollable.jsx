import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */

export default function Scrollable({ className, title, height, children }) {
	return (
		<div
			className={`shadow border border-gray-100 dark:border-neutral-800 p-4 rounded ${
				className && className
			}`}
		>
			{title && (
				<h6 className="dark:text-white font-medium text-base pb-4">{title}</h6>
			)}
			<div
				className={`overflow-scroll overflow-x-hidden ${
					height ? height : "h-52"
				}`}
			>
				{children}
			</div>
		</div>
	);
}

export function custom({ className, title, height, children }) {
	return (
		<div
			className={`shadow border border-gray-100 dark:border-neutral-800 py-4 pr-4 rounded ${
				className && className
			}`}
		>
			{title && (
				<h6 className="dark:text-white font-medium text-base pl-4 pb-4">
					{title}
				</h6>
			)}
			<div
				className={`${
					height ? height : "h-52"
				} overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-800`}
			>
				<div className="pl-4 pr-5">{children}</div>
			</div>
		</div>
	);
}

Scrollable.custom = custom;

Scrollable.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	height: PropTypes.string,
	children: PropTypes.object,
};

Scrollable.defaultProps = {
	className: "",
	title: "",
	height: "",
};

custom.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	height: PropTypes.string,
	children: PropTypes.object,
};

custom.defaultProps = {
	className: "",
	title: "",
	height: "",
};
