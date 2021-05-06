import React from "react";
import { Container } from "semantic-ui-react";

const SearchBar = ({ input: keyword, onChange: setKeyword }) => {
	const BarStyling = {
		width: "20rem",
		background: "#F2F1F9",
		border: "none",
		padding: "0.5rem",
	};
	return (
		<Container>
			<h1>Pet Search</h1>
			<input
				style={BarStyling}
				key="stam"
				value={keyword}
				placeholder={"search pet"}
				onChange={(e) => setKeyword(e.target.value)}
			/>
		</Container>
	);
};

export default SearchBar;
