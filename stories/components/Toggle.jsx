import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

/**
 * Primary UI component for user interaction
 */

export default function Toggle({ className, large }) {
	const [on, setOn] = useState(false);

	return (
		<div
			onClick={() => setOn(!on)}
			className={`transition-all cursor-pointer rounded-full relative
      ${
				on
					? className
						? className + " "
						: "bg-blue-500"
					: "bg-neutral-200 dark:bg-neutral-700"
			}
      ${large ? "w-12 h-7" : "w-11 h-6"}`}
		>
			<div
				className={`bg-white rounded-full absolute top-1 transition-all 
        ${on ? "left-6" : "left-1"}
        ${large ? "h-5 w-5" : "h-4 w-4"}`}
			></div>
		</div>
	);
}

Toggle.propTypes = {
	large: PropTypes.bool,
	className: PropTypes.string,
};

Toggle.defaultProps = {
	large: false,
	className: "",
};
