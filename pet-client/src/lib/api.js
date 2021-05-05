import axios from "axios";
import { useContext } from "react";
import { setUserTokenContext } from "../context/UserAuth";

const baseUrl = "http://localhost:5050/api";

export const signUp = async (userInfo) => {
	const response = await axios.post(`${baseUrl}/users/signup`, userInfo);
	return response.data;
};

export const login = async (user) => {
	const response = await axios.post(
		"http://localhost:5050/api/users/login",
		user
	);
	return response.data;
};
