import React from "react";
// import { Input, Menu , Image, Icon, Container} from 'semantic-ui-react'
// import logodog from '../../../static/logodog.png'
import LoginForm from "../components/LoginForm";
import {
	Menu,
	Container,
	Image,
	Icon,
	Modal,
	centered,
	open,
	Form,
	Input,
	Checkbox,
} from "semantic-ui-react";
import SignUp from "../components/SignUp";

function MainNavigation() {
	const user = false;
	// const router = useRouter()
	const [open, setOpen] = React.useState(false);

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
					name="Search A Friend"
					onClick={(event) => (window.location.href = "/searchAFriend")}
				>
					<Icon name="search" />
					Search a friend
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
							account
						</Menu.Item>

						<Menu.Item
							header
							name="Sign out"
							onClick={(event) => (window.location.href = "/signout")}
						>
							<Icon name="sign out" />
							logout
						</Menu.Item>
					</>
				)}
				{!user && (
					<>
						<Modal
							centered={false}
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
						/>
						
            	<Modal
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
						/>
					</>
				)}
			</Container>
		</Menu>
	);
	//   ;
}
export default MainNavigation;
