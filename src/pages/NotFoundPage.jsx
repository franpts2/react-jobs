import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import Button from "../components/Button";

const NotFoundPage = () => {
	return (
		<section className="text-center flex flex-col justify-center items-center h-96">
			<FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
			<h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
			<p className="text-xl mb-5">This page does not exist</p>
			<Button
				text="Go Back"
				link="/"
				bg="bg-indigo-700"
				bgHover="bg-indigo-900"
			/>
		</section>
	);
};

export default NotFoundPage;
