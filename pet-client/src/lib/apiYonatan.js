// import axios from "axios";

// const BaseUrl = process.env.REACT_APP_BASE_URL;

// function getAuthConfig(token) {
//   return {
//     headers: {
//       Authorization: 'Bearer ' + token,
//     }
//   };
// }

// export async function signup(email, password) {
//   const response = await axios.post(BaseUrl + '/users', { email, password });
//   return response.data;
// }

// export async function login(email, password) {
//   const response = await axios.post(BaseUrl + '/users/login', { email, password });
//   return response.data;
// }

// export async function createProduct(name, price, category, token) {
//   const response = await axios.post(
//     BaseUrl + '/products',
//     { name, price, category },
//     getAuthConfig(token)
//   );
//   return response.data;
// }

// export async function getProductById(id, token) {
//   const response = await axios.get(
//     BaseUrl + '/products/' + id, 
//     getAuthConfig(token)
//   );
//   return response.data;
// }

// export async function getMyProducts(token) {
//   const response = await axios.get(BaseUrl + '/products/me', getAuthConfig(token));
//   return response.data;
// }