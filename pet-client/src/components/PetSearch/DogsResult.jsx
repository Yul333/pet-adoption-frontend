import axios from 'axios'
import { useEffect, useState } from 'react'
import PetList from '../PetList'

function DogsResult() {
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

  const filteredByDog = pets.filter((pet) => pet.Type === 'Dog')
  //inserts the changed state into PetList comp
  console.log(filteredByDog)
  return (
    <>
      <div>
        <PetList pets={filteredByDog} />
      </div>
    </>
  )
}
export default DogsResult
