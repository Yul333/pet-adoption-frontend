import { Item, Label, Button, } from "semantic-ui-react";
import AddPetToMyPets from "./PetButtons";

function PetSummary({
	_id,
	Type,
	Name,
	AdoptionStatus,
	Picture,
	Height,
	Weight,
	Color,
	Bio,
	Hypoallergenic,
	DietaryRestrictions,
	Breed,
}) {
	return (
    <>
		<Item.Group relaxed size="huge">
			<Item relaxed size="huge">
				<Item.Image size="medium" src={Picture} />
				<Item.Content verticalAlign='middle'>
					<Item.Header as='h3'  color='violet'>{Name}</Item.Header>

					<Item.Description>
						<p size="large" color='blue'>{AdoptionStatus}</p>
						<Label size="large" color='blue' image>Bio: {Bio}</Label>
					</Item.Description>
					<Item.Description>
						<Label size="large" color='blue'>Type: {Type}</Label>
					</Item.Description>
					<Item.Description>
						<Label size="large" color='blue' >Color: {Color}</Label>
					</Item.Description>
					<Item.Description>
						<Label size="large" color='blue'>Height: {Height}</Label>
					</Item.Description>
					<Item.Description>
						<Label size="large" color='blue'>Weight: {Weight}</Label>
					</Item.Description>
					<Item.Description>
						<Label size="large" color='blue'>Hypoallergenic: {Hypoallergenic}</Label>
					</Item.Description>
					<Item.Description>
						<Label size="large" color='blue'>DietaryRestrictions: {DietaryRestrictions}</Label>
					</Item.Description>
					<Item.Description>
						<Label size="large" color='blue'>Breed: {Breed}</Label>
					</Item.Description>
					<Item.Extra>
						<AddPetToMyPets petId={_id} />
					</Item.Extra>
				</Item.Content>
			</Item>
		</Item.Group>
   
      </>
	);
}

export default PetSummary;
