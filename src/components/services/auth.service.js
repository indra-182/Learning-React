import axios from "axios";
import jwtDecode from "jwt-decode";

export const login = async (reqBody, callback) => {
  try {
    const res = await axios.post(
      "https://fakestoreapi.com/auth/login",
      reqBody
    );
    callback(true, res.data);
  } catch (error) {
    callback(false, error);
  }
};

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user;
};
