import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// import { ArrowCircleUpIcon } from "@heroicons/react/outline";

/**
 * Primary UI component for user interaction
 */

export default function BackToTop() {
	const [showBackToTop, setShowBackToTop] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 100) {
				setShowBackToTop(true);
			} else {
				setShowBackToTop(false);
			}
		});
	}, []);

	// This function will scroll the window to the top
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // for smoothly scrolling
		});
	}

	return (
		<>
			{showBackToTop && (
				<div className="!py-2 px-2 rounded-full mx-4 bg-opacity-20 dark:bg-opacity-40 bg-gray-100 dark:bg-neutral-800 backdrop-filter backdrop-blur fixed bottom-6 right-3 md:right-10 z-40">
					<button
						onClick={scrollToTop}
						className="w-8 h-8 p-1 transition-all ease-in duration-300 bg-blue-500 hover:bg-blue-600 text-white rounded-full"
					>
						{/* <ArrowCircleUpIcon /> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
							/>
						</svg>
					</button>
				</div>
			)}
		</>
	);
}

// BackToTop.propTypes = {
// 	// label: PropTypes.string,
// };

// BackToTop.defaultProps = {
// 	// label: "",
// };
