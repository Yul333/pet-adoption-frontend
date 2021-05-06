import SearchBar from "../PetSearch/SearchBar";

import React, { useState, useEffect } from "react";
import ResultSearch from "../PetSearch/ResultSearch";

const SearchAFriend = (props) => {
	const [input, setInput] = useState("");
	const [petsDefault, setPetsDefault] = useState();
	const [nameList, setNameList] = useState();

	const fetchData = async () => {
		return await fetch("http://localhost:5050/api/pets")
			.then((response) => response.json())
			.then((data) => {
				setNameList(data);
				setPetsDefault(data);
				console.log(data);
			});
	};

	const foundName = async (input) => {
		const filtered = petsDefault.filter((pet) => {
			return pet.Name.toLowerCase().includes(input.toLowerCase());
		});
		setInput(input);
		setNameList(filtered);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<SearchBar input={input} onChange={foundName} />
			<ResultSearch nameList={nameList} />
		</>
	);
};

export default SearchAFriend;
