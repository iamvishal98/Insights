import axios from "axios";
const API_URL = "http://127.0.0.1:5050/client/";

const getProducts = async () => {
  const response = await axios.get(API_URL + "products");
  return response.data;
};

const facingService = {
  getProducts,
};

export default facingService;
