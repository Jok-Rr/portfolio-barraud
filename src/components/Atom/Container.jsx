import React from "react";

const Container = ({ children, className }) => {
	return (
		<div
			className={`grid grid-cols-4 w-[90%] m-auto gap-8 py-6 ${className}`}
		>
			{children}
		</div>
	);
};

export default Container;
