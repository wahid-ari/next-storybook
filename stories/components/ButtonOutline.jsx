import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */

export default function ButtonOutline({
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
				text-sm text-blue-500 transition-all outline-none px-3 py-1.5 font-medium border border-blue-500 
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				${disabled ? "cursor-not-allowed" : "hover:text-white hover:bg-blue-500"} 
				`}
		>
			{children}
		</button>
	);
}

ButtonOutline.green = ({
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
				text-sm text-emerald-500 transition-all outline-none px-3 py-1.5 font-medium border border-emerald-500
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				${disabled ? "cursor-not-allowed" : "hover:text-white hover:bg-emerald-500"} 
				`}
		>
			{children}
		</button>
	);
};

ButtonOutline.yellow = ({
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
				text-sm text-amber-500 transition-all outline-none px-3 py-1.5 font-medium border border-amber-500
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				${disabled ? "cursor-not-allowed" : "hover:text-white hover:bg-amber-500"} 
				`}
		>
			{children}
		</button>
	);
};

ButtonOutline.orange = ({
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
				text-sm text-orange-500 transition-all outline-none px-3 py-1.5 font-medium border border-orange-500
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				${disabled ? "cursor-not-allowed" : "hover:text-white hover:bg-orange-500"} 
				`}
		>
			{children}
		</button>
	);
};

ButtonOutline.red = ({
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
				text-sm text-red-500 transition-all outline-none px-3 py-1.5 font-medium border border-red-500
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				${disabled ? "cursor-not-allowed" : "hover:text-white hover:bg-red-500"} 
				`}
		>
			{children}
		</button>
	);
};

ButtonOutline.purple = ({
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
				text-sm text-violet-500 transition-all outline-none px-3 py-1.5 font-medium border border-violet-500
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				${disabled ? "cursor-not-allowed" : "hover:text-white hover:bg-violet-500"} 
				`}
		>
			{children}
		</button>
	);
};

ButtonOutline.dark = ({
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
				text-sm text-gray-500 dark:text-gray-300 transition-all outline-none px-3 py-1.5 font-medium border border-gray-500
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				${disabled ? "cursor-not-allowed" : "hover:text-white hover:bg-gray-500"} 
				`}
		>
			{children}
		</button>
	);
};

ButtonOutline.propTypes = {
	className: PropTypes.string,
	type: PropTypes.oneOf(["button", "submit", "reset"]),
	value: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	pills: PropTypes.bool,
	children: PropTypes.string.isRequired,
};

ButtonOutline.defaultProps = {
	className: "",
	type: "button",
	value: "button",
	onClick: undefined,
	disabled: false,
	pills: false,
	children: "Button",
};
