import axios from "axios";
import React, { useEffect, useState } from "react";
import PetSummary from "../components/Pet/PetSummary";

const Pet = () => {
	const [petId, setPet] = useState([]);

	let urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get("_id");

	useEffect(() => {
		loadPets();
	}, []);

	async function loadPets() {
		const url = `http://localhost:5050/api/pets/${id}`;
		const response = await axios.get(url);
		console.log(response);
		setPet(response.data.pet);
	}

	return (
		<>
			<PetSummary {...petId} />
		</>
	);
};

export default Pet;
