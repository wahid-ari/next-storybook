import React from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../../utils/GlobalContext";
import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDarkMode } from "storybook-dark-mode";

/**
 * Primary UI component for user interaction
 */

export default function Skeletons({ className }) {
	// console.log(useDarkMode())
	// const { darkMode } = useContext(GlobalContext);

	return useDarkMode() ? (
		<Skeleton
			className={`${className ? className + " " : ""} h-10 mb-2 rounded`}
			baseColor="#262626"
			highlightColor="#404040"
		/>
	) : (
		<Skeleton
			className={`${
				className ? className + " " : ""
			} h-10 mb-2 dark:bg-gray-500 dark:text-gray-400 rounded`}
		/>
	);

	// return (
	// 	<Skeleton
	// 		className={`${
	// 			className ? className + " " : ""
	// 		} h-10 mb-2 dark:bg-gray-500 dark:text-gray-400`}
	// 	/>
	// );
}

Skeletons.propTypes = {
	className: PropTypes.string,
};

Skeletons.defaultProps = {
	className: "",
};
