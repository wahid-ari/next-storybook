import React from "react";
import PropTypes from "prop-types";
import s from "./LoadingDots.module.css";

/**
 * Primary UI component for user interaction
 */

export default function LoadingDots({ className, medium, large }) {
	return (
		<span
			className={`${s.root} inline-flex text-center items-center leading-7 ${className}`}
		>
			<span
				className={`bg-neutral-600 dark:bg-zinc-200 rounded-full ${
					medium ? "h-3 w-3" : large ? "h-4 w-4" : "h-2 w-2"
				}`}
			/>
			<span
				className={`bg-neutral-600 dark:bg-zinc-200 rounded-full ${
					medium ? "h-3 w-3" : large ? "h-4 w-4" : "h-2 w-2"
				}`}
			/>
			<span
				className={`bg-neutral-600 dark:bg-zinc-200 rounded-full ${
					medium ? "h-3 w-3" : large ? "h-4 w-4" : "h-2 w-2"
				}`}
			/>
		</span>
	);
}

LoadingDots.propTypes = {
	className: PropTypes.string,
	medium: PropTypes.bool,
	large: PropTypes.bool,
};

LoadingDots.defaultProps = {
	className: "",
	medium: false,
	large: false,
};