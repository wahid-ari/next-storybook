import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */

export default function Select({
	label,
	id,
	name,
	className,
	defaultValue,
	onChange,
	children,
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
			<select
				{...rest}
				id={id}
				name={name}
				defaultValue={defaultValue}
				onChange={onChange}
				className={`
          ${className ? className + " " : ""}
          cursor-pointer mt-2 block w-full px-2.5 py-[0.6rem] text-sm rounded-md transition-all
          dark:text-white bg-white dark:bg-neutral-900  
          border border-gray-300 dark:border-neutral-700 
          focus:ring-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 outline-none
        `}
			>
				{children}
			</select>
		</div>
	);
}

export function Option({ value, children, ...rest }) {
	return (
		<option value={value} {...rest}>
			{children}
		</option>
	);
}

export function OptGroup({ label, children }) {
	return (
		<optgroup label={label}>
			{children}
		</optgroup>
	);
}

Select.Option = Option;
Select.OptGroup = OptGroup;

Select.propTypes = {
	label: PropTypes.string,
	id: PropTypes.string,
	name: PropTypes.string,
	className: PropTypes.string,
	defaultValue: PropTypes.string,
	onChange: PropTypes.func,
	children: PropTypes.object,
};

Select.defaultProps = {
	label: "",
	id: "",
	name: "",
	className: "",
	defaultValue: "",
	onChange: undefined,
};
