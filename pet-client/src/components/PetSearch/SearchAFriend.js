import SearchBar from '../PetSearch/SearchBar'
import ResultSearchType from '../PetSearch/ResultSearchType'
import React, { useState, useEffect } from 'react'
import ResultSearch from '../PetSearch/ResultSearch'
import { Button, Grid } from 'semantic-ui-react'

const SearchAFriend = (props) => {
  const [input, setInput] = useState('')
  const [petsDefault, setPetsDefault] = useState([])
  const [nameList, setNameList] = useState()
  const [isSearchByNameOrType, setIsSearchByNameOrType] = useState(true)
  const [error, setError] = useState('')

  const fetchData = async () => {
    setError('')
    return await fetch('http://localhost:5050/api/pets')
      .then((response) => response.json())
      .then((data) => {

        setPetsDefault(data)
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
        setError('Somethings wrong....' + error)
      })
  }

  const foundName = (input) => {
    const filtered = petsDefault.filter((pet) => {
      return pet.Name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input)
    setNameList(filtered)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (error) {
    return <div>{error}</div>
  }
  return (
    <>
      <Grid centered columns={2}>
        <Grid.Column>
          <Button
            onClick={(e) => setIsSearchByNameOrType(!isSearchByNameOrType)}
            content={
              isSearchByNameOrType
                ? 'Click here to Search by Type'
                : 'Click here to Search by Name'
            }
            primary
          />
        </Grid.Column>
        <Grid.Row centered columns={2}>
          <Grid.Column>
            {isSearchByNameOrType ? (
              <>
                <SearchBar
                  input={input}
                  onChange={foundName}
                  isSearchByNameOrType={isSearchByNameOrType}
                />
                <ResultSearch nameList={nameList} />
              </>
            ) : (
              <ResultSearchType />
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default SearchAFriend
