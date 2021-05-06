import axios from "axios";

const baseUrl = "http://localhost:5050/api";

function getAuthConfig(token) {
	return {
	  headers: {
		Authorization: 'Bearer ' + token,
	  }
	};
  }

export const signUp = async (userInfo) => {
	const response = await axios.post(`${baseUrl}/users/signup`, userInfo);
	return response.data;
};
export const editAccount = async (userInfo) => {
	const response = await axios.put(`${baseUrl}/users/account`, userInfo);
	return response.data;
};
export const login = async (user) => {
	const response = await axios.post(
		"http://localhost:5050/api/users/login",
		user
	);
	return response.data;
};
// export async function getPetById(id, token) {
// 	const response = await axios.get(
// 	  baseUrl + '/products/' + id, 
// 	  getAuthConfig(token)
// 	);
// 	return response.data;
//   }
  
  export async function getMyPets(token) {
	const response = await axios.get(baseUrl + '/pets/myPetsPage', getAuthConfig(token));
	return response.data;
  }