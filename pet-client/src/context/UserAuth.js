import React, { createContext, useContext, useEffect, useState } from "react";
import localforage from "localforage";

export const setUserTokenContext = createContext(null); //creates and resets context
//delete useAuth
export const useAuth = () => {  //allows every comp to approach auth and to rerender if changed
	return useContext(setUserTokenContext); //Hook that uses the created context and calls it using the useAuth.
}; 
function UserAuth(props) {
	const [token, setToken] = useState(null); //Hooks for changing the inner state of comp
	const [user, setUser] = useState(null);
	useEffect(() => { //gets the token and user from forage and updates them
		localforage.getItem("token", (error, value) => {
			if (error) {
				setToken(null);
			} else {
				setToken(value);
			}
		});
		localforage.getItem("user", (error, value) => {
			if (error) {
				setUser(null);
			} else {
				setUser(value);
				console.log(value)
			}
		});
	}, []);
	const context = { user, token, setUserToken }; //contains context parameters

	function setUserToken(token, user) { //func that is only declared and not used
		localforage.setItem("token", token); //sets token in forage
		                   //key   , value : defined here and goes into forage
		localforage.setItem("user", user); //sets user in forage
		setToken(token);
		setUser(user);
	}
	return ( //here setUserTokenContext receives context and provides it down to the children
		<setUserTokenContext.Provider value={context}> 
			{props.children}
		</setUserTokenContext.Provider>
	);
}

export default UserAuth;
