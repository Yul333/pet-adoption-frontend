import { Link } from "react-router-dom";
import { Button, Card, Grid, Image,  Segment } from "semantic-ui-react";

function PetList({ pets }) {
	
	function mapPetsToItems(petsArr = []) {
;

		return petsArr.map(pet =>({
		  header: pet.Name,
		  image: pet.Picture,
		  meta: pet.AdoptionStatus,
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
		<>
		<Segment style={{ padding: "3em 0em" }} vertical>
				<Grid centered stackable>
					<Grid.Column width={13}>
		<Card.Group itemsPerRow={3} 
			stackable
			itemsPerRow="3"
			centered
			items={mapPetsToItems(pets)}
		/>
			</Grid.Column>
				</Grid>
			</Segment>
			</>
	);
}

export default PetList;
