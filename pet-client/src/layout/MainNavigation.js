import localforage from "localforage";
import React, { useContext } from "react";
import { Container, Icon, Image, Menu } from "semantic-ui-react";
import LoginForm from "../components/LoginForm";
import SignUp from "../components/SignUp";
import { setUserTokenContext } from "../context/UserAuth";
import petcute3 from "../static/petcute.png";

function MainNavigation(props) {
	function dropLocalForageCache() {
		localforage.clear();
		window.location.replace("http://localhost:3000/");
	}

		const { user } = useContext(setUserTokenContext);

	return (
		<Menu stackable id="menu">
			<Container text>
				<Image
					avatar
					src={petcute3}
					style={{
						marginRight: "3em",
						marginBottom: "0.7em",
						marginTop: "0.5em",
					}}
				/>

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

						<Menu.Item header name="Sign out" onClick={dropLocalForageCache}>
							<Icon name="sign out" />
							logout
						</Menu.Item>
					</>
				)}
				{!user && (
					<>
						<LoginForm />

						<SignUp />
					</>
				)}
			</Container>
		</Menu>
	);
	//   ;
}
export default MainNavigation;
