import SearchBar from "../PetSearch/SearchBar";
import ResultSearchType from "../PetSearch/ResultSearchType";
import React, { useState, useEffect } from "react";
import ResultSearch from "../PetSearch/ResultSearch";
import { Button } from "semantic-ui-react";

const SearchAFriend = (props) => {
	const [input, setInput] = useState("");
	const [petsDefault, setPetsDefault] = useState([]);
	const [nameList, setNameList] = useState();
	const [typeList, setTypeList] = useState();
	const [changeType, setChangeType] = useState(true);

	// function handleChange() {
	// 	setChangeType(!changeType); //originally true. '!'-toggles by clicking between name/type   
	// }
// const change = () => setChangeType(!changeType)
	const fetchData = async () => {
		return await fetch("http://localhost:5050/api/pets")
			.then((response) => response.json())
			.then((data) => {
				// setNameList(data);
				setPetsDefault(data);
				console.log(data);
			}).catch();
	};

	const foundName =  (input) => {
		const filtered = petsDefault.filter((pet) => {
			return pet.Name.toLowerCase().includes(input.toLowerCase());
		});
		setInput(input);
		setNameList(filtered);
	};

	const foundType =  (input) => {
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
					onClick={	(e) => setChangeType(!changeType)}
					content={
						changeType
							? "Click here to Search by Type"
							: "Click here to Search by Name"
					}//if the changeType btn is appearing, then the search is by name and vice versa 
					primary
				/>
			</span>
			{/* {changeType ? (                                 //for the placeholder in SearchBar */}
				<SearchBar input={input} onChange={changeType ? foundName : foundType}
				 changeType={changeType} /> 
			{/* ) : ( //receives input from the SearchBar as found in its value(line 17) 
				<SearchBar input={input} onChange={foundType} changeType={changeType} />
			)} */}
			{changeType ? (
				<ResultSearch nameList={nameList} />
			) : (
				<ResultSearchType typeList={typeList} />
			)}
		</>
	);
};

export default SearchAFriend;
