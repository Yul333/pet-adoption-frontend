import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PetSummary from '../components/Pet/PetSummary'

const Pet = () => {
  const [petId, setPetId] = useState([])
  let urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get('_id') // gets the id from url
  // loads pets once (compDidMount)
  useEffect(() => {
    loadPets()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function loadPets() {
    //inserts id at the endpoint of the server
    const url = `http://localhost:5050/api/pets/${id}`
    const response = await axios.get(url) // get pet
    console.log(response)
    //extracts the pet from obj that returned from server
    setPetId(response.data.pet)
  }
  console.log(petId)
  //PetSummary-the designed structure of the page. {...petId}-stores the response from server. spread operator takes array/obj and expands it into individual elements
  return (
    <>
      <PetSummary {...petId} />
    </>
  )
}

export default Pet
