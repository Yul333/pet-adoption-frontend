import React, {useContext, useState} from "react";
import { setUserTokenContext } from '../context/UserAuth'

import {
	Button,
	Form,
	Icon,
	Message,
	Segment,
	Modal,
	Menu,
 
} from "semantic-ui-react";
import { login, loginInfo } from "../lib/api";

import axios from 'axios';

const INITIAL_USER = {
	email: "",
	password: "",
};

function LoginForm() {
  const {setUserToken} = useContext(setUserTokenContext)

	const [userInfo, setUserInfo] = React.useState(INITIAL_USER);
	const [disabled, setDisabled] = React.useState(true);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState("");
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		const isUser = Object.values(userInfo).every((el) => Boolean(el));
		isUser ? setDisabled(false) : setDisabled(true);
	}, [userInfo]);


  // const handlelogin = async event => {
  //   event.preventDefault()
  //   const loginUser ={
  //     email,
  //     password
  //   }
	 
	  // axios
		//   .post('http://localhost:5500/api/users/login', user)
		//   .then(response => {
    //     setUserToken(response.data.token, response.data.user)
		// 	  console.log(response)
    //     window.location.replace("http://localhost:3000/")
		//   })
		//   .catch(error => {
		// 	  console.log(error)
		//   })
  
  // }


	function handleChange(event) {
		const { name, value } = event.target;
		setUserInfo((prevState) => ({ ...prevState, [name]: value }));
	}

	async function handleSubmit(event) {
		event.preventDefault();
		setError("")
		setLoading(true);

   
     
    if( !userInfo.email || !userInfo.password ){
      setError("No email and/or password")
     
           return
     
  
    }
    

		try {
			
			const {token, user} = await login(userInfo)
			setUserToken (token, user)
			window.location.replace("http://localhost:3000/")

 
      setOpen(false)
		} catch (error) {
			
      setError("Email and password do not match!")
		} finally {
			setLoading(false);
		}
	}

	return (
		<>
			<Modal 
      size="huge"
      centered={true}
      style={{ position: "relative" }}

				as={Form}
				onSubmit={(e) => handleSubmit(e)}
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
				open={open}
				trigger={
					<Menu.Item>
						<Icon name="sign in" />
						Login
					</Menu.Item>
				}
			>
				<Modal.Header>Login!</Modal.Header>
				<Modal.Content>
					<Message
						attached
						icon="privacy"
						header="Welcome Back!"
						content="Log in with email and password"
						color="blue"
					/>
					{/* <Form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}> */}
					{/* {error && <Message error header="Oops!" content={error} />} */}
					{error && <div>{error}</div>}
					<Segment>
						<Form.Input
							fluid
							icon="envelope"
							iconPosition="left"
							label="Email"
							placeholder="Email"
							name="email"
							type="email"
							value={userInfo.email}
							onChange={handleChange}
						/>
						<Form.Input
							fluid
							icon="lock"
							iconPosition="left"
							label="Password"
							placeholder="Password"
							name="password"
							type="password"
							value={userInfo.password}
							onChange={handleChange}
						/>

						{/* <Button
							disabled={disabled || loading}
							icon="sign in"
							type="submit"
							color="orange"
							content="Login"
						/> */}
					</Segment>
					{/* </Form> */}
					<Message attached="bottom" warning>
						<Icon name="help" />
						New user?{" "}
						<a href="/SignUp">
							<h2>Sign up here</h2>
						</a>{" "}
						instead.
					</Message>
				</Modal.Content>
				<Modal.Actions>
					{/* <Button color="black" onClick={() => setOpen(false)}>
						Nope
					</Button> */}
					<Button
						content="Sign me in!"
						type="submit"
						labelPosition="center"
						icon="sign in"
						// onClick={() => setOpen(false)}
						positive
					/>
				</Modal.Actions>
			</Modal>
		</>
	);
}

export default LoginForm;
