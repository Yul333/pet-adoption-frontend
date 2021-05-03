import { Header, Button, Card } from "semantic-ui-react";

//AdoptionStatus, Picture, Height, Weight, Color, Bio, Hypoallergenic, DietaryRestrictions, Breed
function PetInfo({ PetId }) {
  // const { Type, Name, Color } = PetId
  function mapPetInfoToItems(petIdArr=[]){
    
    return petIdArr.map(pet =>({
      header: pet.Name,
      image: pet.Type,
      meta: pet.Color,
      // meta: pet.Type,
      color: 'teal',
      fluid: true,
      // childkey: pet_id,
      href: `/pet?_id=${pet._id}`

      
    
    }))
  }
  // if (!PetId || PetId.length === 0) {
  //   return 'loading...'
  // }
  return <Card.Group
  
  stackable
  itemsPerRow="3"
  centered
   items={mapPetInfoToItems(PetId) }
   />
 
}

export default PetInfo;


// function PetList({pets}) {
//   // const { Type, Name, AdoptionStatus, Picture, Height, Weight, Color, Bio, Hypoallergenic, DietaryRestrictions, Breed } = pet

   
//    />;
 
   
  
// }

