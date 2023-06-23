import axios from "axios";
const API_URL = "http://127.0.0.1:5050/sales";

const getSalesData = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const salesService = {
  getSalesData,
};

export default salesService;
