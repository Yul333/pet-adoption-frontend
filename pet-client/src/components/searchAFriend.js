import React from 'react'
import PetList from '../components/Index/PetList'

const searchAFriend = () => {
    return (
        <div>
           <PetList pets={petsJson}/> 
        </div>
    )
}

export default searchAFriend
const petsJson = [
    {
      "name": "Bonny",
      "description": "cute",
      "sku": "263-43-7861",
      "mediaUrl": "https://carnivora.ca/images/dogs/carnivora-dogs.jpg"
    },
    {
      "name": "Jeffry",
      "age": 2,
      "description": "small",
      "sku": "263-43-7862",
      "mediaUrl": "https://grunfarm.com/wp-content/uploads/2020/09/Maltese_puppy.jpeg"
    },
    {
      "name": "Shmoop",
      "age": 5,
      "description": "smelly",
      "sku": "263-43-7868",
      "mediaUrl": "https://thumbs-prod.si-cdn.com/BBCqRWrIcgT27wW_55umBJ1rJac=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/2b/98/2b98ec47-682d-4844-b3b3-9410263a4f94/gj3m9r.jpg"
    },
    {
      "name": "Emily",
      "age": 15,
      "description": "best friend",
      "sku": "263-43-7860",
      "mediaUrl": "https://st.depositphotos.com/1011434/2672/i/950/depositphotos_26728105-stock-photo-labrador-dog-sitting-on-floor.jpg"
    }
  
  ]