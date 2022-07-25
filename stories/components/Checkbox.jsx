import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */

export default function Checkbox({
	label,
	name,
	value,
	onChange,
	checked,
	defaultChecked,
	className,
	...rest
}) {
	return (
		<div className="mb-2 text-sm font-medium">
			<label className="inline-flex items-center cursor-pointer">
				<input
					{...rest}
					name={name}
					value={value}
					onChange={onChange}
					checked={checked}
					defaultChecked={defaultChecked}
					type="checkbox"
					className={`
          ${className ? className + " " : ""}
          h-4 w-4 border-gray-300 dark:border-neutral-700 rounded text-blue-500 focus:ring-blue-500 
          bg-white dark:bg-neutral-900 dark:checked:bg-blue-500
          transition-all cursor-pointer
        `}
				/>
				<span className="ml-2 text-gray-700 dark:text-neutral-300">
					{label}
				</span>
			</label>
		</div>
	);
}

Checkbox.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	checked: PropTypes.bool,
	defaultChecked: PropTypes.bool,
	className: PropTypes.string,
};

Checkbox.defaultProps = {
	label: "",
	name: "",
	value: "",
	onChange: undefined,
	checked: "",
	defaultChecked: "",
	className: "",
};
