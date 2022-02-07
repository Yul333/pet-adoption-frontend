import { Link } from 'react-router-dom'
import { Button, Card, Container, Grid, Segment } from 'semantic-ui-react'

function MyPetsList({ pets }) {
  //data from MyPets comp
  function mapPetsToItems(petsArr = []) {
    return petsArr.map((pet) => ({
      header: pet.Name,
      image: pet.Picture,
      meta: pet.AdoptionStatus,
      color: 'teal',
      fluid: true,
      key: pet._id,
      href: `/pet?_id=${pet._id}`,
    }))
  }
  if (!pets || pets.length === 0) {
    return (
      <Container text>
        <div
          style={{
            fontSize: '20px',
            marginBottom: '0.8em',
          }}
        >
          No pets found on your list...
          <br />
          <br />
          <Link to='/AllPets'>
            <Button
              primary
              style={{
                marginBottom: '0.8em',
              }}
            >
              <p>Look for a new friend</p>
            </Button>
          </Link>
        </div>
      </Container>
    )
  }
  return (
    <>
      <Segment style={{ padding: '3em 0em' }} vertical>
        <Grid centered stackable>
          <Grid.Column width={13}>
            <Card.Group
              itemsPerRow={3}
              stackable
              centered
              items={mapPetsToItems(pets)}
            />
          </Grid.Column>
        </Grid>
      </Segment>
    </>
  )
}

export default MyPetsList
