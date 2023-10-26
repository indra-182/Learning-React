import axios from "axios";

export const getProducts = async (callback) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    callback(response.data);
  } catch (error) {
    console.log(error);
  }
};
