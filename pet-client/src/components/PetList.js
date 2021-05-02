import { Card } from 'semantic-ui-react'

function PetList({pets}) {
  // const { Type, Name, AdoptionStatus, Picture, Height, Weight, Color, Bio, Hypoallergenic, DietaryRestrictions, Breed } = pet
  function mapPetsToItems(petsArr=[]){
    
    return petsArr.map(pet =>({
      header: pet.Name,
      image: pet.Picture,
      meta: pet.AdoptionStatus,
      // meta: pet.Type,
      color: 'teal',
      fluid: true,
      // childkey: pet_id,
      href: `/pet?_id=${pet._id}`

      
    
    }))
  }
  if (!pets || pets.length === 0) {
    return 'loading...'
  }
  return <Card.Group
  
  stackable
  itemsPerRow="3"
  centered
   items={mapPetsToItems(pets) }
   
   />;
 
   
  
}

export default PetList;
