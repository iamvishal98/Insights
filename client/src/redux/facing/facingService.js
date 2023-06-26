import axios from "axios";
const API_URL = `${import.meta.env.VITE_BASE_URL}client/`;

const getProducts = async () => {
  const response = await axios.get(API_URL + "products");
  return response.data;
};

const getCustomers = async () => {
  const response = await axios.get(API_URL + "customers");
  return response.data;
};

const getLocations = async () => {
  const response = await axios.get(API_URL + "geographs");
  return response.data;
};

const facingService = {
  getProducts,
  getCustomers,
  getLocations,
};

export default facingService;
