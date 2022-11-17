import axios from 'axios'
import { useEffect, useState } from 'react'
import PetList from '../PetList'

function ResultByType({ petType }) {
    const [pets, setPets] = useState([])
  
    useEffect(() => {
      loadPets()
    }, [])
  
    async function loadPets() {
      const url = 'http://localhost:5050/api/pets'
      const response = await axios.get(url)
      console.log(response)
      setPets(response.data)
    }
  
    const filteredByType = pets.filter((pet) => pet.Type === (petType))
    //inserts the changed state into PetList comp
    console.log(filteredByType)
    return (
      <>
        <div>
          <PetList pets={filteredByType} />
        </div>
      </>
    )
  }
  export default ResultByType