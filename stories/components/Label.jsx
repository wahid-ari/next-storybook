import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */

export default function Label({ className, children, ...rest }) {
	return (
		<label
			{...rest}
			className={`${className} block text-gray-800 dark:text-neutral-300`}
		>
			{children}
		</label>
	);
}

Label.propTypes = {
	className: PropTypes.string,
	children: PropTypes.string,
};

Label.defaultProps = {
	className: "",
	children: "",
};
