import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Button,
  Form,
  Icon,
  Menu,
  Message,
  Modal,
  Segment,
} from 'semantic-ui-react'
import { setUserTokenContext } from '../context/UserAuth'
import { login } from '../lib/api'

const INITIAL_USER = {
  email: '',
  password: '',
}

function LoginForm() {
  const { setUserToken } = useContext(setUserTokenContext)

  const [userInfo, setUserInfo] = React.useState(INITIAL_USER)

  const [error, setError] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const history = useHistory()

  function handleChange(event) {
    const { name, value } = event.target
    setUserInfo((prevState) => ({ ...prevState, [name]: value }))
  }
  console.log(userInfo)

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    //if no email or password, the message below appears
    if (!userInfo.email || !userInfo.password) {
      setError('No email and/or password')

      return
    }

    try {
      const { token, user } = await login(userInfo)
      setUserToken(token, user)
      history.push('/')
      setOpen(false)

      console.log(user)
      console.log(token)
    } catch (error) {
      setError('Email and password do not match!')
    }
  }

  return (
    <>
      <Modal
        size='huge'
        centered={true}
        style={{ position: 'relative' }}
        as={Form}
        onSubmit={(e) => handleSubmit(e)}
        onClose={() => setOpen(false)} //opens the popping window
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Menu.Item header>
            <Icon header name='sign in' />
            Login
          </Menu.Item>
        }
      >
        <Modal.Header>Login!</Modal.Header>
        <Modal.Content>
          <Message
            attached
            icon='privacy'
            header='Welcome Back!'
            content='Log in with email and password'
            color='blue'
          />

          {error && <div>{error}</div>}
          <Segment>
            <Form.Input
              fluid
              icon='envelope'
              iconPosition='left'
              label='Email'
              placeholder='Email'
              name='email'
              type='email'
              value={userInfo.email}
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
              value={userInfo.password}
              onChange={handleChange}
            />
          </Segment>

          <Message attached='bottom' warning>
            <Icon name='help' />
            New user?{' '}
            <a href='/SignUp'>
              <h2>Sign up here</h2>
            </a>{' '}
            instead.
          </Message>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content='Sign me in!'
            type='submit'
            labelPosition='center'
            icon='sign in'
            positive
          />
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default LoginForm
