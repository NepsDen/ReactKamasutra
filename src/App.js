import React from 'react';

import './App.css';

const App = () => {
	return (
		<div>
			<Header />
			<Technologies />
		</div>
	);
};
const Technologies = () => {
	return (
		<div>
			<ul>
				<li />Html
        <li />React
        <li />CSS

			</ul>
		</div>
	);
};

const Header = () => {
	return (
		<div className="App">
			<a href="/">Home</a>
			<a href="/">News</a>
			<a href="/">Messages</a>
		</div>
	);
};
export default App;
