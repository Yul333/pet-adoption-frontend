import axios from "axios";
import { useEffect, useState } from "react";
import PetList from "../components/PetList";
//presents all pets in the data base
function AllPets() {
	const [pets, setPets] = useState([]);

	useEffect(() => {
		loadPets();
	}, []);

	async function loadPets() {//gets all pets from server
		const url = "http://localhost:5050/api/pets";
		const response = await axios.get(url);
		console.log(response);
		setPets(response.data);//inserts the returned data in the pets hook
	}

	return (//inserts the changed state into PetList comp
		<>
			<div>
				<PetList pets={pets} />
			</div>
		</>
	);
}

export default AllPets;
