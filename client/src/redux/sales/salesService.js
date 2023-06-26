import axios from "axios";
const API_URL = `${import.meta.env.VITE_BASE_URL}sales`;

const getSalesData = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const salesService = {
  getSalesData,
};

export default salesService;
