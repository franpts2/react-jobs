import React from "react";

const Button = ({link, text = 'Button', bg = 'bg-black', bgHover = 'bg-gray-700'}) => {
	return (
		<a
			href={link}
			className={`inline-block ${bg} text-white rounded-lg px-4 py-2 hover:${bgHover}`}
		>
			{text}
		</a>
	);
};

export default Button;
