import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */

export default function UnorderedList({ className, bullet, inside, children }) {
	return (
		<ul
			className={`${bullet ? "list-disc" : "list-none"} ${
				inside && "list-inside"
			} ${className && className}`}
		>
			{children}
		</ul>
	);
}

export function item({ className, children }) {
	return (
		<li className={`dark:text-white ${className && className}`}>{children}</li>
	);
}

UnorderedList.item = item;

UnorderedList.propTypes = {
	className: PropTypes.string,
	bullet: PropTypes.bool,
	inside: PropTypes.bool,
	children: PropTypes.object,
};

UnorderedList.defaultProps = {
	className: "",
	bullet: false,
	inside: false,
};

item.propTypes = {
	className: PropTypes.string,
	children: PropTypes.object,
};

item.defaultProps = {
	className: "",
};
