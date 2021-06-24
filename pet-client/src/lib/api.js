import axios from "axios";

const baseUrl = "http://localhost:5050/api";

function getAuthConfig(token) {
	return {
		headers: {
			Authorization: "Bearer " + token,
		},
	};
}

export const signUp = async (userInfo) => {
	const response = await axios.post(`${baseUrl}/users/signup`, userInfo);
	console.log("res", response.data)
	return response.data;
};
export const editAccount = async (id, user, token) => {
	const response = await axios.put(
		`${baseUrl}/users/account/${id}`,
		{ data: user },
		getAuthConfig(token)
	);
	return response.data;
};
export const login = async (user) => {
	const response = await axios.post(
		"http://localhost:5050/api/users/login",
		user
	);
	return response.data;
};

export async function getMyPets(token) {
	const response = await axios.get(
		baseUrl + "/pets/myPetsPage",
		getAuthConfig(token)
	);
	return response.data;
}

export const getUser = async (userId) => {
	const response = await axios.get(`${baseUrl}/users/${userId}`);
	return response.data;
};

export const getPetsByIds = async (petsIdsArr) => {
	const response = await axios.post(`${baseUrl}/pets/petsByIds`, {
		petsIds: petsIdsArr,
	});
	return response.data;
};
