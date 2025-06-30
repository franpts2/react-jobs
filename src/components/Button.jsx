import React from "react";
import { Link } from 'react-router-dom';

const Button = ({
	link,
	text = "Button",
	bg = "bg-black",
	bgHover = "bg-gray-700",
    blockType = 'inline-block',
    biggerBtn = false,
	centeredText = false,
	smallerText = false,
}) => {
	return (
		<Link
			to={link}
			className={`${blockType} ${bg} text-white rounded-${biggerBtn ? 'xl' : 'lg'} ${biggerBtn ? 'py-4 px-6' : 'px-4 py-2'} hover:${bgHover} ${
				centeredText && "text-center"
			} ${smallerText && "text-sm"}`}rounded-xl
		>
			{text}
		</Link>
	);
};

export default Button;
