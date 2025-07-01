import React from "react";
import { PacmanLoader } from "react-spinners";

const override = {
	display: "block",
	margin: "100px auto",
};

const Spinner = ({ loading }) => {
	return (
		<PacmanLoader
			color="#4338ca"
			loading="loading"
			cssOverride={override}
			size={75}
		/>
	);
};

export default Spinner;
