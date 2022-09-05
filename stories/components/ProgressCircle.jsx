import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */

export default function ProgressCircle({
	className,
	color,
	size,
	percent,
	showPercent,
	strokeWidth,
	textClassName,
}) {
	const circumferencee = size * 2 * Math.PI;
	return (
		<div
			className={`inline-flex items-center justify-center overflow-hidden rounded-full ${
				className && className
			}`}
		>
			<svg className="w-20 h-20">
				<circle
					className="text-gray-200 dark:text-gray-700"
					strokeWidth={strokeWidth ? strokeWidth : "5"}
					stroke="currentColor"
					fill="transparent"
					r={size}
					cx="40"
					cy="40"
				/>
				<circle
					className={`${color ? color : "text-sky-500"}`}
					strokeWidth={strokeWidth ? strokeWidth : "5"}
					strokeDasharray={circumferencee}
					strokeDashoffset={circumferencee - (percent / 100) * circumferencee}
					strokeLinecap="round"
					stroke="currentColor"
					fill="transparent"
					r={size}
					cx="40"
					cy="40"
				/>
			</svg>
			{showPercent && (
				<span className={`absolute text-lg text-sky-500 ${textClassName}`}>
					{percent}%
				</span>
			)}
		</div>
	);
}

export function small({
	className,
	color,
	size,
	percent,
	showPercent,
	strokeWidth,
	textClassName,
}) {
	const circumferencee = size * 2 * Math.PI;
	return (
		<div
			className={`inline-flex items-center justify-center overflow-hidden rounded-full ${
				className && className
			}`}
		>
			<svg className="w-14 h-14">
				<circle
					className="text-gray-200 dark:text-gray-700"
					strokeWidth={strokeWidth ? strokeWidth : "5"}
					stroke="currentColor"
					fill="transparent"
					r={size}
					cx="30"
					cy="30"
				/>
				<circle
					className={`${color ? color : "text-sky-500"}`}
					strokeWidth={strokeWidth ? strokeWidth : "5"}
					strokeDasharray={circumferencee}
					strokeDashoffset={circumferencee - (percent / 100) * circumferencee}
					strokeLinecap="round"
					stroke="currentColor"
					fill="transparent"
					r={size}
					cx="30"
					cy="30"
				/>
			</svg>
			{showPercent && (
				<span
					className={`absolute text-xs text-sky-500 pl-1 pt-1 ${textClassName}`}
				>
					{percent}%
				</span>
			)}
		</div>
	);
}

ProgressCircle.small = small;

ProgressCircle.propTypes = {
	className: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.number,
	percent: PropTypes.number,
	showPercent: PropTypes.bool,
	strokeWidth: PropTypes.number,
	textClassName: PropTypes.string,
};

ProgressCircle.defaultProps = {
	className: "",
	color: "",
	size: 30,
	percent: 50,
	showPercent: true,
	strokeWidth: 5,
	textClassName: "",
};

small.propTypes = {
	className: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.number,
	percent: PropTypes.number,
	showPercent: PropTypes.bool,
	strokeWidth: PropTypes.number,
	textClassName: PropTypes.string,
};

small.defaultProps = {
	className: "",
	color: "",
	size: 20,
	percent: 50,
	showPercent: true,
	strokeWidth: 3,
	textClassName: "",
};
