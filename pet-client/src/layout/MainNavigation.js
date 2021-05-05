import React, {useContext} from "react";
import { Container, Icon, Image, Menu, Modal } from "semantic-ui-react";

import LoginForm from "../components/LoginForm";
import SignUp from "../components/SignUp";

import { setUserTokenContext} from '../context/UserAuth'

import localforage from 'localforage';


function MainNavigation(props) {

	function  dropLocalForageCache () {
		localforage.clear()
		window.location.replace("http://localhost:3000/")
	  }
	
	// const user = localStorage.getItem("email") || ''; // const router = useRouter()
	const [open, setOpen] = React.useState(false);
	const {user} = useContext(setUserTokenContext);


	return (
		
		<Menu stackable fluid id="menu">
			<Container text>
				<Image avatar style={{ marginRight: "1em" }} />

				<Menu.Item
					header
					name="home"
					onClick={(event) => (window.location.href = "/")}
				>
					Pet adoption
				</Menu.Item>
				<Menu.Item
					header
					name="All Pets"
					onClick={(event) => (window.location.href = "/AllPets")}
				>
					<Icon name="heart outline" />
					All Pets
				</Menu.Item>
				<Menu.Item
					header
					name="search"
					onClick={(event) => (window.location.href = "/SearchAFriend")}
				>
					<Icon name="search" />
					Search A Friend
				</Menu.Item>

				{user && (
					<>
						<Menu.Item
							header
							name="my pets page"
							onClick={(event) => (window.location.href = "/myPetsPage")}
						>
							<Icon name="bullseye" />
							My pets page
						</Menu.Item>

						<Menu.Item
							header
							name="account"
							onClick={(event) => (window.location.href = "/account")}
						>
							<Icon name="user" />
							Account
						</Menu.Item>

						<Menu.Item
							header
							name="AddAPet"
							onClick={(event) => (window.location.href = "/AddAPet")}
						>
							<Icon name="add square" />
							Add A Pet
						</Menu.Item>

						<Menu.Item
							header
							name="Sign out"
							onClick={dropLocalForageCache}
								// => {
								// localStorage.setItem("email", '')								// window.location.href = "/signout"
							// }
							// }
						>
							<Icon name="sign out" />
							logout
						</Menu.Item>
					</>
				)}
				{!user && (
					<>
						{/* <Modal
							centered={true}
							style={{ position: "relative" }}
							trigger={
								<Menu.Item>
									<Icon name="sign in" />
									Login
								</Menu.Item>
							}
							header="Welcome Back Friend To-Be :)"
							content={<LoginForm />}
							actions={[
								"Cancel",
								{ key: "done", content: "Done", positive: true },
							]}
						/> */}
						<LoginForm />

						<SignUp />

						{/* <Modal
							centered={false}
							trigger={
								<Menu.Item>
									<Icon name="signup" />
									Sign Up
								</Menu.Item>
							}
							header="Sign Up For A New Friend"
							content={<SignUp />}
							actions={[
								"Cancel",
								{ key: "done", content: "Done", positive: true },
							]}
						/> */}
					</>
				)}
			</Container>
		</Menu>
	);
	//   ;
}
export default MainNavigation;
