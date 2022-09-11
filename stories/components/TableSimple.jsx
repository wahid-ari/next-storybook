import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */

export default function TableSimple({ className, head, bordered, children }) {
	return (
		<div
			className={`${className ? className + " " : ""}w-full rounded 
    ${
			bordered
				? "border-t dark:border-t-neutral-800"
				: "border dark:border-neutral-800"
		}
    `}
		>
			<div className="scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 dark:scrollbar-thumb-neutral-700">
				<table className="w-full whitespace-nowrap text-neutral-800 dark:text-neutral-300">
					<thead>
						<tr className="border-b text-sm dark:border-neutral-800 font-medium bg-gray-50 dark:bg-[#202020]">
							{head}
						</tr>
					</thead>
					<tbody>{children}</tbody>
				</table>
			</div>
		</div>
	);
}

export function Tr({ className, children }) {
	return (
		<tr
			className={`${className ? className + " " : ""}
      text-sm bg-white text-neutral-600 dark:text-neutral-200 dark:bg-neutral-900 border-b dark:border-neutral-800`}
		>
			{children}
		</tr>
	);
}

export function Td({ className, small, bordered, children }) {
	return (
		<td
			className={`${className ? className + " " : ""}p-3 ${
				bordered ? "border-x dark:border-x-neutral-800" : ""
			} ${small ? "w-1" : ""}`}
		>
			{children}
		</td>
	);
}

TableSimple.Tr = Tr;
TableSimple.Td = Td;

TableSimple.propTypes = {
	className: PropTypes.string,
	head: PropTypes.object,
	bordered: PropTypes.bool,
	children: PropTypes.object,
};

TableSimple.defaultProps = {
	className: "",
	head: "",
	bordered: false,
	children: "",
};

Tr.propTypes = {
	className: PropTypes.string,
	children: PropTypes.object,
};

Tr.defaultProps = {
	className: "",
	children: "",
};

Td.propTypes = {
	className: PropTypes.string,
	small: PropTypes.bool,
	bordered: PropTypes.bool,
	children: PropTypes.object,
};

Td.defaultProps = {
	className: "",
	small: PropTypes.bool,
	bordered: PropTypes.bool,
	children: "",
};
