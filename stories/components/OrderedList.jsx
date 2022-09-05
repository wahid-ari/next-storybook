import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */

export default function OrderedList({ className, inside, children }) {
  return (
    <ul className={`list-decimal ${inside && "list-inside"} ${className && className}`}>
      {children}
    </ul>
  );
};

export function item({ className, children }) {
	return (
		<li className={`dark:text-white ${className && className}`}>{children}</li>
	);
}

OrderedList.item = item;

OrderedList.propTypes = {
	className: PropTypes.string,
	inside: PropTypes.bool,
	children: PropTypes.object,
};

OrderedList.defaultProps = {
	className: "",
	inside: false,
};

item.propTypes = {
	className: PropTypes.string,
	children: PropTypes.object,
};

item.defaultProps = {
	className: "",
};
