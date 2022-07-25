import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */

export default function Card({ className, children }) {
	return (
		<div
			className={`${className} p-3 lg:p-4 rounded-lg border dark:border-neutral-800`}
		>
			{children}
		</div>
	);
}

Card.propTypes = {
	className: PropTypes.string,
	children: PropTypes.string.isRequired,
};

Card.defaultProps = {
	className: "dark:text-white",
	children: "Card Content",
};
