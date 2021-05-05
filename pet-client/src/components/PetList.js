import { Card, Image } from "semantic-ui-react";

function PetList({ pets }) {
	// const { Type, Name, AdoptionStatus, Picture, Height, Weight, Color, Bio, Hypoallergenic, DietaryRestrictions, Breed } = pet
	function mapPetsToItems(petsArr = []) {
		// return petsArr.map((pet) => (
		// 	<Card className="fluid" key={pet._id} href={`/pet?_id=${pet._id}`}>
		// 		<Image src={pet.Picture} wrapped ui={false} />
		// 		<Card.Content>
		// 			<Card.Header>{pet.Name}</Card.Header>
		// 			<Card.Meta>
		// 				<span className="date">{pet.AdoptionStatus}</span>
		// 			</Card.Meta>
		// 			<Card.Description>
		// 				Matthew is a musician living in Nashville.
		// 			</Card.Description>
		// 		</Card.Content>
		// 		<Card.Content extra>
				
		// 		</Card.Content>
		// 	</Card>
		// ));

		return petsArr.map(pet =>({
		  header: pet.Name,
		  image: pet.Picture,
		  meta: pet.AdoptionStatus,
		  // meta: pet.Type,
		  color: 'teal',
		  fluid: true,
		  key: pet._id,
		  href: `/pet?_id=${pet._id}`
		}))
	}
	if (!pets || pets.length === 0) {
		return "loading...";
	}
	return (
		<Card.Group
			stackable
			itemsPerRow="3"
			centered
			items={mapPetsToItems(pets)}
		/>
	);
}

export default PetList;
