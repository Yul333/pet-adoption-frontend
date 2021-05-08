import { Item, Label, Button, Card, Image, Icon, Container, Message, } from "semantic-ui-react";
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
    <div style={{
		fontSize:"18px",
		color: "teal"
	}}
	class="ui message">

	<Container
	>
<Message color = "green"
size='tiny'


>
		 <Item.Group >
			<Item >
				<Item.Image size="medium" src={Picture} />
				<Item.Content  >
					<Item.Header as='h12'  color='red'>{Name}</Item.Header>
					<p size="large" color='olive'>{AdoptionStatus}</p>

					
					<Item.Description>
					
						<Label size="large" color='green'>Type: </Label>  {Type}
					
					</Item.Description>
					<Item.Description>
						<Label size="large" color='green' >Color: </Label>  {Color}
					</Item.Description>
					<Item.Description>
						<Label size="large" color='green'>Height: </Label>  {Height}
					</Item.Description>
					<Item.Description>
						<Label size="large" color='green'>Weight: {Weight}</Label>  {Weight}
					</Item.Description>
					<Item.Description>
						<Label size="large" color='green'>Hypoallergenic: </Label>  {Hypoallergenic}
					</Item.Description>
					<Item.Description>
						<Label size="large" color='green'>DietaryRestrictions: </Label>  {DietaryRestrictions}
					</Item.Description>
					<Item.Description>
						<Label size="large" color='green'>Breed: </Label>  {Breed}
					</Item.Description>
					<Item.Description >
					
						<Label size="large" color='green' image>Bio: </Label>  {Bio}
					</Item.Description>
					<Item.Extra>
						<AddPetToMyPets petId={_id} />
					</Item.Extra>
				</Item.Content>
			</Item>
		</Item.Group>
		</Message>
		</Container>
      </div>
	);
}

export default PetSummary;


// 	{/* <Card centered
// 	size = "large"
// 	style={{
// 		height: "200px",
// 		width:"600px",
// 		fontsize:"200px"
		
// 	  }}
// 	>
//     <Image src={Picture} wrapped ui={false} />
//     <Card.Content
// 	 style={{
// 		height: "200px",
// 		width:"600px"
		
// 	  }}>
//       <Card.Header >  {Name}</Card.Header>
//       <Card.Meta>
//         <span className='date'>{AdoptionStatus}</span>
//       </Card.Meta>
//       <Card.Description fluid>
// 	  Type: {Type}
// 	  {/* Color: {Color}
// 	  Height: {Height}
// 	  Weight: {Weight}
// 	  Hypoallergenic: {Hypoallergenic}
// 	  DietaryRestrictions: {DietaryRestrictions}
// 	  Breed: {Breed} */}

//       </Card.Description>
// 	  <Card.Description fluid>
// 	  {/* Type: {Type} */}
// 	  Color: {Color}
// 	  {/* Height: {Height}
// 	  Weight: {Weight}
// 	  Hypoallergenic: {Hypoallergenic}
// 	  DietaryRestrictions: {DietaryRestrictions}
// 	  Breed: {Breed} */}

//       </Card.Description>
// 	  <Card.Description fluid>
// 	  {/* Type: {Type}
// 	  Color: {Color} */}
// 	  Height: {Height}
// 	  {/* Weight: {Weight}
// 	  Hypoallergenic: {Hypoallergenic}
// 	  DietaryRestrictions: {DietaryRestrictions}
// 	  Breed: {Breed} */}

//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//       <a>
//         <Icon name='user' />
//         22 Friends
//       </a>
//     </Card.Content>
//   </Card> */}