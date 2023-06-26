import axios from "axios";
const API_URL = "http://127.0.0.1:5050/general/";

const getUser = async (userID) => {
  const response = await axios.get(API_URL + `users/${userID}`);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const getDashboardStats = async (userID) => {
  const response = await axios.get(API_URL + "dashboard");
  return response.data;
};

const generalService = {
  getUser,
  getDashboardStats,
};

export default generalService;
