import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */

export default function Container({
	className,
	small,
	medium,
	large,
	children,
	...rest
}) {
	return (
		<div
			{...rest}
			className={`
        ${className ? className + " " : ""} 
        ${small ? "p-2" : medium ? "p-4" : large ? "p-6" : "p-8"} 
        relative mb-2 rounded-md border border-slate-200 dark:border-neutral-900 bg-white dark:bg-neutral-800`}
		>
			{children}
		</div>
	);
}

Container.propTypes = {
	className: PropTypes.string,
	small: PropTypes.bool,
	medium: PropTypes.bool,
	large: PropTypes.bool,
	children: PropTypes.string.isRequired,
};

Container.defaultProps = {
	className: "dark:text-white",
	small: false,
	medium: false,
	large: false,
	children: "Container Content",
};
