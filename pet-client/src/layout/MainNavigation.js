import { Link } from 'react-router-dom'
import localforage from 'localforage'
import React, { useContext } from 'react'
import { Container, Icon, Image, Menu } from 'semantic-ui-react'
import LoginForm from '../components/LoginForm'
import SignUp from '../components/SignUp'
import { setUserTokenContext } from '../context/UserAuth'
import petcute3 from '../static/petcute.png'

function MainNavigation(props) {
  function dropLocalForageCache() {
    localforage.clear()
    window.location.replace('http://localhost:3000/')
  }
  // accepts the returned value and returns the current context value as it given by the provider
  const { user } = useContext(setUserTokenContext)

  return (
    <Menu secondary stackable id='menu'>
      <Container>
        <Menu.Item header name={user && user.firstName} />

        <Image
          avatar
          src={petcute3}
          style={{
            maxWidth: '32px',
            maxHight: '32px',
            marginRight: '3em',
            marginBottom: '0.7em',
            marginTop: '0.5em',
          }}
        />

        <Menu.Item as={Link} to='/' header name='Pet adoption' />

        <Menu.Item as={Link} to='/AllPets' header name='All Pets'>
          All Pets
          <Icon name='heart outline' />
        </Menu.Item>

        <Menu.Item as={Link} to='/SearchAFriend' header name='search'>
          Search A Friend
          <Icon name='search' />
        </Menu.Item>

        {user && (
          <>
            <Menu.Item as={Link} to='/myPetsPage' header name='my pets page'>
              {' '}
              My pets page
              <Icon name='bullseye' />
            </Menu.Item>

            <Menu.Item as={Link} to='/AddAPet' header name='AddAPet'>
              Add A Pet
              <Icon name='add square' />
            </Menu.Item>

            <Menu.Menu position='right'>
              <Menu.Item as={Link} to='/account' header name='account'>
                {' '}
                Account
                <Icon name='user' />
              </Menu.Item>
              <Menu.Item header name='Sign out' onClick={dropLocalForageCache}>
                Logout
                <Icon name='sign out' />
              </Menu.Item>
            </Menu.Menu>
          </>
        )}
        {!user && (
          <>
            <Menu.Menu position='right'>
              <LoginForm />

              <SignUp />
            </Menu.Menu>
          </>
        )}
      </Container>
    </Menu>
  )
}
export default MainNavigation
