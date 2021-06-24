import React, { createContext, useContext, useEffect, useState } from "react";
import localforage from "localforage";

export const setUserTokenContext = createContext(null);

export const useAuth = () => {
	return useContext(setUserTokenContext);
};
function UserAuth(props) {
	const [token, setToken] = useState(null);
	const [user, setUser] = useState(null);
	useEffect(() => {
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
	const context = { user, token, setUserToken };

	function setUserToken(token, user) {
		localforage.setItem("token", token);
		
		localforage.setItem("user", user);
		setToken(token);
		setUser(user);
	}
	return (
		<setUserTokenContext.Provider value={context}>
			{props.children}
		</setUserTokenContext.Provider>
	);
}

export default UserAuth;
