import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */

export default function Progress({ className, progressClassName, height, percent }) {
	return (
		<div
			className={`
      ${className ? className + " " : ""}
      ${height ? height + " " : "h-1"}
      w-full bg-gray-200 dark:bg-neutral-800 rounded-full`}
		>
			<div
				className={`${height ? height + " " : "h-1"} ${
					progressClassName ? progressClassName : "bg-blue-500"
				} rounded-full`}
				style={{ width: `${percent}%` }}
			></div>
		</div>
	);
}

Progress.percentage = ({ className, progressClassName, percent }) => {
	return (
		<div
			className={`
      ${className ? className + " " : ""}
      w-full bg-gray-200 dark:bg-neutral-800 rounded-full`}
		>
			<div
				className={`${
					progressClassName ? progressClassName : "bg-blue-500"
				} rounded-full text-center text-white text-xs leading-none font-medium p-0.5`}
				style={{ width: `${percent}%` }}
			>
				{percent} %
			</div>
		</div>
	);
};

Progress.propTypes = {
	className: PropTypes.string,
	progressClassName: PropTypes.string,
	height: PropTypes.string,
	percent: PropTypes.string,
};

Progress.defaultProps = {
	className: "",
	progressClassName: "",
	height: "",
	percent: "",
};
