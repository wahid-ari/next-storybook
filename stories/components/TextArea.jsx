import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */

export default function TextArea({
	label,
	className,
	id,
	name,
	placeholder,
	value,
	onChange,
	height,
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
			<textarea
				{...rest}
				id={id}
				name={name}
				rows={height}
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className={`${className ? className + " " : ""}
          text-sm rounded-md mt-2 w-full transition-all p-3
          dark:text-white bg-white dark:bg-neutral-900 
          border border-gray-300 dark:border-neutral-700
          focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none
        `}
			/>
		</div>
	);
}

TextArea.disabled = ({
	label,
	className,
	id,
	name,
	placeholder,
	value,
	onChange,
	height,
	...rest
}) => {
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
			<textarea
				{...rest}
				id={id}
				name={name}
				rows={height}
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				disabled
				className={`${className ? className + " " : ""}
          text-sm rounded-md mt-2 w-full p-3 cursor-not-allowed
          text-neutral-500 bg-gray-100 dark:bg-neutral-800
          border border-gray-300 dark:border-neutral-700
        `}
			/>
		</div>
	);
};

TextArea.propTypes = {
	label: PropTypes.string,
	className: PropTypes.string,
	id: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	height: PropTypes.number,
};

TextArea.defaultProps = {
	label: "",
	className: "",
	id: "",
	name: "",
	placeholder: "",
	value: "",
	onChange: undefined,
	height: "",
};
