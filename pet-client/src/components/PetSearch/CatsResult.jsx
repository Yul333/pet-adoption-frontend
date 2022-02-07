import axios from 'axios'
import { useEffect, useState } from 'react'
import PetList from '../PetList'

function CatsResult() {
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

  const filteredByCat = pets.filter((pet) => pet.Type === 'Cat')
  //inserts the changed state into PetList comp
  return (
    <>
      <div>
        <PetList pets={filteredByCat} />
      </div>
    </>
  )
}

export default CatsResult
