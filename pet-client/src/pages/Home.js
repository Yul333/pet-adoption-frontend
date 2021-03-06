import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, Header, Image, Segment } from 'semantic-ui-react'
import { setUserTokenContext } from '../context/UserAuth'

function Home() {
  const { user } = useContext(setUserTokenContext)

  return (
    <>
      <Segment style={{ padding: '2em 0em' }} vertical>
        <Grid centered stackable>
          <Grid.Column width={14}>
            {user ? (
              <h1> {`Welcome, ${user.firstName}!`}</h1>
            ) : (
              <h1>Welcome Friend!</h1>
            )}{' '}
            <br />
            <Image
              centered
              src={
                'https://image.freepik.com/free-photo/group-pet_87557-4334.jpg'
              }
              size='large'
            />
            <Header as='h3' style={{ fontSize: '2em' }}>
              Why it's a great idea to adopt a pet?
            </Header>
            <p style={{ fontSize: '1.43em' }}>
              Pet adoption is quickly becoming the preferred way to find a new
              dog, puppy, cat or kitten. Best of all, there are so many benefits
              when you adopt a dog or adopt a cat over buying. There are many
              health benefits of owning a pet. They can increase opportunities
              to exercise, get outside, and socialize. Regular walking or
              playing with pets can decrease blood pressure, cholesterol levels,
              and triglyceride levels. Pets can help manage loneliness and
              depression by giving us companionship.
            </p>
            <Link to='/SearchAFriend'>
              <Button color='orange' icon='plus' widths='7'>
                <p>Search pets</p>
              </Button>
            </Link>
          </Grid.Column>
        </Grid>
      </Segment>
    </>
  )
}

export default Home
