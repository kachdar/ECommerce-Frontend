// import axios from "axios";

// const register = async (userData) => {
//   const response = await axios.post(`https://localhost:7209/api/Auth/register`, userData);

//   if (response.data)
//     localStorage.setItem("user", JSON.stringify(response.data));

//   return response.data;
// };

// const login = async (userData) => {
//   const response = await axios.post(`https://localhost:7209/api/Auth/login`, userData);

//   if (response.data)
//     localStorage.setItem("token", JSON.stringify(response.data));

//   return response.data;
// };

// const logout = () => localStorage.removeItem("user");

// const getUserInfo = async () => {
//   const token = JSON.parse(localStorage.getItem("user"));
  
//   const response = await axios
//     .get(`https://localhost:7209/api/User`, {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//     .then((res) => console.log(res.data))
//     .catch(er => console.log(er));
// };

// const authService = {
//   register,
//   login,
//   logout,
//   getUserInfo,
// };

// export default authService;
