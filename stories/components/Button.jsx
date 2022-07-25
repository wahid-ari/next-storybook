import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */

export default function Button({
	className,
	type,
	value,
	onClick,
	disabled,
	pills,
	children,
	...rest
}) {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			disabled={disabled && true}
			value={value}
			className={`
				text-sm text-white transition-all outline-none px-3 py-1.5 font-medium bg-blue-500 
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				${disabled ? "cursor-not-allowed" : "hover:bg-blue-600"} 
				`}
		>
			{children}
		</button>
	);
}

Button.secondary = ({
	className,
	type,
	value,
	onClick,
	disabled,
	pills,
	children,
	...rest
}) => {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			disabled={disabled && true}
			value={value}
			className={`
				text-sm text-neutral-800 dark:text-neutral-300 transition-all outline-none px-3 py-1.5 font-medium bg-gray-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-800
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				${
					disabled
						? "cursor-not-allowed"
						: "hover:bg-gray-100 dark:hover:bg-neutral-900"
				} 
				`}
		>
			{children}
		</button>
	);
};

Button.green = ({
	className,
	type,
	value,
	onClick,
	disabled,
	pills,
	children,
	...rest
}) => {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			disabled={disabled && true}
			value={value}
			className={`
				text-sm text-white transition-all outline-none px-3 py-1.5 font-medium bg-emerald-500
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				${disabled ? "cursor-not-allowed" : "hover:bg-emerald-600"} 
				`}
		>
			{children}
		</button>
	);
};

Button.yellow = ({
	className,
	type,
	value,
	onClick,
	disabled,
	pills,
	children,
	...rest
}) => {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			disabled={disabled && true}
			value={value}
			className={`
				text-sm text-white transition-all outline-none px-3 py-1.5 font-medium bg-amber-500
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				${disabled ? "cursor-not-allowed" : "hover:bg-amber-600"} 
				`}
		>
			{children}
		</button>
	);
};

Button.orange = ({
	className,
	type,
	value,
	onClick,
	disabled,
	pills,
	children,
	...rest
}) => {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			disabled={disabled && true}
			value={value}
			className={`
				text-sm text-white transition-all outline-none px-3 py-1.5 font-medium bg-orange-500
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				${disabled ? "cursor-not-allowed" : "hover:bg-orange-600"} 
				`}
		>
			{children}
		</button>
	);
};

Button.red = ({
	className,
	type,
	value,
	onClick,
	disabled,
	pills,
	children,
	...rest
}) => {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			disabled={disabled && true}
			value={value}
			className={`
				text-sm text-white transition-all outline-none px-3 py-1.5 font-medium bg-red-500
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				${disabled ? "cursor-not-allowed" : "hover:bg-red-600"} 
				`}
		>
			{children}
		</button>
	);
};

Button.purple = ({
	className,
	type,
	value,
	onClick,
	disabled,
	pills,
	children,
	...rest
}) => {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			disabled={disabled && true}
			value={value}
			className={`
				text-sm text-white transition-all outline-none px-3 py-1.5 font-medium bg-violet-500
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				${disabled ? "cursor-not-allowed" : "hover:bg-violet-600"} 
				`}
		>
			{children}
		</button>
	);
};

Button.dark = ({
	className,
	type,
	value,
	onClick,
	disabled,
	pills,
	children,
	...rest
}) => {
	return (
		<button
			{...rest}
			type={type}
			onClick={onClick}
			disabled={disabled && true}
			value={value}
			className={`
				text-sm text-white transition-all outline-none px-3 py-1.5 font-medium bg-gray-500
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				${disabled ? "cursor-not-allowed" : "hover:bg-gray-600"} 
				`}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	className: PropTypes.string,
	type: PropTypes.oneOf(["button", "submit", "reset"]),
	value: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	pills: PropTypes.bool,
	children: PropTypes.string.isRequired,
};

Button.defaultProps = {
	className: "",
	type: "button",
	value: "button",
	onClick: undefined,
	disabled: false,
	pills: false,
	children: "Button",
};
