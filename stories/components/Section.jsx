import React from "react";
import PropTypes from "prop-types";
import Heading from "./Heading";

/**
 * Primary UI component for user interaction
 */

export default function Section({ id, name = "", className, children }) {
	return (
		<section id={id} className={`${className ? className + "" : ""}`}>
			<Heading.h3>{name}</Heading.h3>
			<div className="mb-2">{children}</div>
		</section>
	);
}

Section.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.string.isRequired,
};

Section.defaultProps = {
	id: "section",
	name: "Section",
	className: "dark:text-white",
	children: "Section Content",
};
