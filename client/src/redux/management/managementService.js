import axios from "axios";
const API_URL = "http://127.0.0.1:5050/management";

const getadminData = async () => {
  const response = await axios.get(API_URL + "/admins");

  return response.data;
};

const getPerformanceData = async (userId) => {
  const response = await axios.get(API_URL + `/perfromance/${userId}`);

  return response.data;
};

const managementService = {
  getadminData,
  getPerformanceData,
};

export default managementService;
