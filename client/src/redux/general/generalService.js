import axios from "axios";
const API_URL = `${import.meta.env.VITE_BASE_URL}general/`;

const getUser = async (userID) => {
  const response = await axios.get(API_URL + `users/${userID}`);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const getDashboardStats = async () => {
  const response = await axios.get(API_URL + "dashboard");
  return response.data;
};

const generalService = {
  getUser,
  getDashboardStats,
};

export default generalService;
