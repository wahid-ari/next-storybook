import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */

export default function InputRange({
	id,
	className,
	label,
	name,
	value,
	onChange,
	...rest
}) {
	return (
		<div className="mb-4">
			{label && (
				<label
					htmlFor={name}
					className="block font-medium text-sm text-neutral-800 dark:text-gray-200"
				>
					{label}
				</label>
			)}
			<input
				{...rest}
				id={id}
				type="range"
				name={name}
				value={value}
				onChange={onChange}
				className={`
          ${className ? className + " " : ""} 
          w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700
        `}
			/>
		</div>
	);
}

InputRange.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.number,
	onChange: PropTypes.func,
};

InputRange.defaultProps = {
	id: "",
	className: "",
	label: "",
	name: "",
	value: "",
	onChange: undefined,
};
