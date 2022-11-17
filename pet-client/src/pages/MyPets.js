/* eslint-disable no-lone-blocks */
import React, { useContext, useEffect, useState } from 'react'
import MyPetsList from '../components/MyPetsList'
import { setUserTokenContext } from '../context/UserAuth'
import { getPetsByIds, getUser } from '../lib/api'

const MyPets = () => {
  const [pets, setPets] = useState([])
  const { user } = useContext(setUserTokenContext)

  useEffect(() => {
    {//loads pets if user is logged in
      user && loadPets()
    }
  }, [user])

  async function loadPets() {
    console.log(user._id)
    const userFromServer = await getUser(user._id)
    console.log(userFromServer)
    const userPetsData = await getPetsByIds(userFromServer.myPetsIds)
    setPets(userPetsData)
  }

  return (
    <div>
      <MyPetsList pets={pets} />{' '}
    </div>
  )
}

export default MyPets
