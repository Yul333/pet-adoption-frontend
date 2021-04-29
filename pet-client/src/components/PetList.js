import { Card, Group} from 'semantic-ui-react'

function PetList({pets}) {

  function mapPetsToItems(petsArr=[]){
    
    return petsArr.map(pet =>({
      header: pet.name,
      image: pet.mediaUrl,
      description: pet.description,
      color: 'teal',
      fluid: true,
      // childkey: pet_id,
      // href: `/pet?_id=${pet._id}`

      
    
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
