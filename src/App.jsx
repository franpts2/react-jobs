import React from "react";

const App = () => {
	const name = "malu";
	const x = 10;
	const y = 20;
	const names = [
		"Ini",
		"Pimpy",
		"Narciso",
		"Carol",
		"Cuca",
		"Matilde",
		"Martim",
		"Joana",
		"Gabi",
		"JP",
		"Joao",
		"Gonçalo",
		"Iara",
		"Mafalda",
		"Leonor",
	];
    const loggedIn = true;
    const styles = {
        color: 'red',
        fontSize: '55px'
    }

	return (
		<>
			<div className="text-3xl font-bold underline">App</div>
			<p style={styles}>Oi {name}</p>
			<p>
				The sum of {x} and {y} is {x + y}
			</p>
			<ul>
				{names.map((name, index) => (
					<li key={index}>{name}</li>
				))}
			</ul>
            { loggedIn && <h1>Hello member!</h1>}
		</>
	);
};

export default App;
