import axios from "axios";
import { useEffect, useState } from "react";
import PetList from "../components/PetList";

function AllPets() {
	const [pets, setPets] = useState([]);

	useEffect(() => {
		loadPets();
	}, []);

	async function loadPets() {
		const url = "http://localhost:5050/api/pets";
		const response = await axios.get(url);
		console.log(response);
		setPets(response.data);
	}

	return (
		<>
			<div>
				<PetList pets={pets} />
			</div>
		</>
	);
}

export default AllPets;
