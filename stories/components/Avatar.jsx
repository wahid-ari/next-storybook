import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

/**
 * Primary UI component for user interaction
 */

export default function Avatar({ className, src, alt }) {
	return (
		<div
			className={`
      ${className ? className + " " : ""}
      relative h-8 w-8 border-blue-500 border-2 rounded-full`}
		>
			<Image
				src={src}
				alt={alt}
				layout="fill"
				className={`${className ? className + " " : ""}rounded-full`}
			/>
		</div>
	);
}

Avatar.propTypes = {
	className: PropTypes.string,
	src: PropTypes.string.isRequired,
	alt: PropTypes.string,
};

Avatar.defaultProps = {
	className: "",
	src: "https://ui-avatars.com/api/?name=John+Doe",
	alt: "Image Alt",
};
