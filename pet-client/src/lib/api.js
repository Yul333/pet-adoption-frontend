import axios from 'axios';

const baseUrl = "http://localhost:5050/api"

export const signUp = async (userInfo) => {
    const response = await axios.post(`${baseUrl}/users`, userInfo);
    return response.data;
}

export const login = async (loginInfo) => {
    const response = await axios.post(`${baseUrl}/users/login`, loginInfo);
    return response.data;
}
