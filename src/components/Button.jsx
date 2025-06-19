import React from "react";

const Button = ({
	link,
	text = "Button",
	bg = "bg-black",
	bgHover = "bg-gray-700",
	centeredText = false,
	smallerText = false,
}) => {
	return (
		<a
			href={link}
			className={`inline-block ${bg} text-white rounded-lg px-4 py-2 hover:${bgHover} ${
				centeredText && "text-center"
			} ${smallerText && "text-sm"}`}
		>
			{text}
		</a>
	);
};

export default Button;
