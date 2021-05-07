import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import MyPetsList from "../components/MyPetsList";
import PetList from "../components/MyPetsList";
import { setUserTokenContext } from "../context/UserAuth";
import { getMyPets, getUser, getPetsByIds } from "../lib/api";
import SavePet from "../components/Pet/SavePet";

const MyPets = () => {
	const [pets, setPets] = useState([]);

	const { user } = useContext(setUserTokenContext);

	useEffect(() => {
		{
			user && loadPets();
		}
	}, [user]);

	async function loadPets() {
		console.log(user._id);
		const userFromServer = await getUser(user._id);
		console.log(userFromServer);

		const userPetsData = await getPetsByIds(userFromServer.myPetsIds);

		setPets(userPetsData);

		// if (userFromServer && userFromServer.myPetsIds.length > 0) {
		// 	const usersPetsData = userFromServer.myPetsIds.map(petId => {

		// 	})
		// }

		// const url = `http://localhost:5050/api/pets/myPets/${user._id}`;
		// const response = await axios.get(url);
		// console.log(response);
		// console.log(user.firstName);
		// setPets(response.data);
	}

	return (
		<div>
			{user && <h1> {`Welcome, ${user.firstName}!`}</h1>}

			<PetList pets={pets} />
			{/* <SavePet user={user} pets={pets} /> */}
		</div>
	);
};

export default MyPets;

// const petsJson = [
// 	{
// 		name: "Shmoop",
// 		age: 5,
// 		description: "smelly",
// 		sku: "263-43-7868",
// 		mediaUrl:
// 			"https://thumbs-prod.si-cdn.com/BBCqRWrIcgT27wW_55umBJ1rJac=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/2b/98/2b98ec47-682d-4844-b3b3-9410263a4f94/gj3m9r.jpg",
// 	},
// 	{
// 		name: "Emily",
// 		age: 15,
// 		description: "best friend",
// 		sku: "263-43-7860",
// 		mediaUrl:
// 			"https://st.depositphotos.com/1011434/2672/i/950/depositphotos_26728105-stock-photo-labrador-dog-sitting-on-floor.jpg",
// 	},
// ];
{
	/* <div>
    <Button.Group widths='3'>
    <Button content="Adopt" primary />
    <Button color='pink'>Foster</Button>
    <Button color='orange'>Save for later</Button>
        </Button.Group>
          </div>
   <div>
   
    <Button color='grey'>Return</Button>
   </div> */
}
