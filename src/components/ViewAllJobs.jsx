import React from "react";
import Button from "./Button";

const ViewAllJobs = () => {
	return (
		<section className="m-auto max-w-lg my-10 px-6">
			<Button
				text="View All Jobs"
				link="/jobs"
				blockType="block"
				centeredText={true}
				biggerBtn={true}
			/>
		</section>
	);
};

export default ViewAllJobs;
