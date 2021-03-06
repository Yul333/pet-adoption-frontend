import React, { useContext } from 'react'
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react'
import { editAccount } from '../lib/api'
import { setUserTokenContext } from '../context/UserAuth'
import { useState } from 'react'
// import axios from "axios";

const INITIAL_USER = {
  //empty fields
  firstName: '',
  lastName: '',
  password: '',
  phoneNumber: '',
  // bio: "",
}

function Account() {
  const {
    token,
    user: userFromCtx,
    setUserToken,
  } = useContext(setUserTokenContext)
  // updating new user info by the empty INITIAL_USER fields//(, ...userFromCtx-not sure what it was used for)
  const [user, setUser] = useState({ ...INITIAL_USER })
  console.log(user)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    //updated info
    const userInfo = {
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      phoneNumber: user.phoneNumber,
    }
    console.log(user)
    console.log(userFromCtx)
    console.log(userInfo)
    try {
      console.log('start loading')
      setLoading(true)
      setError('')
      console.log('start sending')
      //sends new userInfo with func editAccount from api.js
      const { user } = await editAccount(userFromCtx._id, userInfo, token)
      console.log('finish sending')
      console.log(user)
      //updates state with edited account
      setUserToken(token, user)

      setLoading(false)
    } catch (error) {
      setError('Something wrong...')
    } finally {
      setLoading(false)
    }
  }

  function handleChange(event) {
    //knows how to address all changes
    const { name, value } = event.target
    console.log(name, value)
    setUser({ ...user, [name]: value })
  }

  return (
    <>
      <Grid centered columns={2}>
        <Grid.Column>
          <Message
            attached
            icon='settings'
            header='Profile settings'
            content='Manage your settings'
            color='teal'
          />
          <Form
            error={Boolean(error)}
            loading={loading}
            onSubmit={handleSubmit}
          >
            <Message error header='Oops!' content={error} />
            <Segment style={{ padding: '3em 0em' }} vertical>
              <Grid stackable>
                <Grid.Column width={35}>
                  <Form.Input
                    fluid
                    icon='user'
                    iconPosition='left'
                    label='First Name'
                    placeholder='First Name'
                    name='firstName'
                    defaultValue={user.firstName}
                    onChange={handleChange}
                  />
                  <Form.Input
                    fluid
                    icon='user'
                    iconPosition='left'
                    label='Last Name'
                    placeholder='Last Name'
                    name='lastName'
                    defaultValue={user.lastName}
                    onChange={handleChange}
                  />

                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    label='Password'
                    placeholder='Password'
                    name='password'
                    type='password'
                    defaultValue={user.password}
                    onChange={handleChange}
                  />

                  <Form.Input
                    fluid
                    control='input'
                    icon='phone square'
                    iconPosition='left'
                    label='Phone Number'
                    placeholder='Phone Number'
                    name='phoneNumber'
                    type='number'
                    defaultValue={user.phoneNumber}
                    onChange={handleChange}
                  />

                  <Button
                    icon='signup'
                    type='submit'
                    color='orange'
                    content='Save Changes'
                  />
                </Grid.Column>
              </Grid>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default Account
