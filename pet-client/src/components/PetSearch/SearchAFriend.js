import SearchBar from "../PetSearch/SearchBar";
import ResultSearchType from "../PetSearch/ResultSearchType";
import React, { useState, useEffect } from "react";
import ResultSearch from "../PetSearch/ResultSearch";
import { Button } from "semantic-ui-react";

const SearchAFriend = (props) => {
	const [input, setInput] = useState("");
	const [petsDefault, setPetsDefault] = useState();
	const [nameList, setNameList] = useState();
	const [typeList, setTypeList] = useState();
	const [changeType, setChangeType] = useState(true);

	function handleChange() {
		setChangeType(!changeType);
	}

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

		const foundType = async (input) => {
			const filtered = petsDefault.filter((pet) => {
				return pet.Type.toLowerCase().includes(input.toLowerCase());
			});
			setInput(input);
			setTypeList(filtered);
		};

		useEffect(() => {
			fetchData();
		}, []);

		return (
			<>
				<span style={{ marginLeft: "100px" }}>
					<Button
						onClick={handleChange}
						content={changeType ? "Search by Type" : "Search by Name"}
						primary
					/>
				</span>
				{changeType ? (
					<SearchBar input={input} onChange={foundName} />
				) : (
					<SearchBar input={input} onChange={foundType} />
				)}
				{changeType ?  (
					<ResultSearch nameList={nameList} />
				) : (
					<ResultSearchType typeList={typeList} />
				)}
			</>
		);
	};

export default SearchAFriend;
