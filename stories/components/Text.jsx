import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */

export default function Text({ className, children, ...rest }) {
	return (
		<p
			{...rest}
			className={`${
				className ? className + " " : ""
			}dark:text-white`}
		>
			{children}
		</p>
	);
}

Text.light = ({ className, children, ...rest }) => {
	return (
		<p
			{...rest}
			className={`${
				className ? className + " " : ""
			}font-light dark:text-white`}
		>
			{children}
		</p>
	);
};

Text.medium = ({ className, children, ...rest }) => {
	return (
		<p
			{...rest}
			className={`${
				className ? className + " " : ""
			}font-medium dark:text-white`}
		>
			{children}
		</p>
	);
};

Text.semibold = ({ className, children, ...rest }) => {
	return (
		<p
			{...rest}
			className={`${
				className ? className + " " : ""
			}font-semibold dark:text-white`}
		>
			{children}
		</p>
	);
};

Text.bold = ({ className, children, ...rest }) => {
	return (
		<p
			{...rest}
			className={`${
				className ? className + " " : ""
			}font-bold dark:text-white`}
		>
			{children}
		</p>
	);
};

Text.extrabold = ({ className, children, ...rest }) => {
	return (
		<p
			{...rest}
			className={`${
				className ? className + " " : ""
			}font-extrabold dark:text-white`}
		>
			{children}
		</p>
	);
};

Text.propTypes = {
	className: PropTypes.string,
	children: PropTypes.string.isRequired,
};

Text.defaultProps = {
	className: "",
	children: "Paragraph Text",
};
