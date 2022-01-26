import axios from "axios";
import React, { useEffect, useState } from "react";
import PetSummary from "../components/Pet/PetSummary";

const Pet = () => {
	const [petId, setPetId] = useState([]);

	let urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get("_id"); // get the id from url

	useEffect(() => { // loads pets once (compDidMount)
		loadPets();
	}, []);

	async function loadPets() {
		const url = `http://localhost:5050/api/pets/${id}`; //puts id at the endpoint of the server
		const response = await axios.get(url); // get pet
		console.log(response);
		setPetId(response.data.pet); //extracts the pet from obj that returned from server
	}
	console.log(petId)

	return ( //PetSummary-the designed structure of the page. {...petId}-stores the response from server. spread operator takes array/obj and expands it into individual elements
		<>
			<PetSummary {...petId} /> 
			
		</>
	);
};

export default Pet;
