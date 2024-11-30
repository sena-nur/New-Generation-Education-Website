import axios from "axios";
import { API_URL } from "../data/api-url";

export const signUpFunc = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/signup`, data);
    console.log("Success");
  } catch (error) {
    console.error("Error creating student:", error);
    throw error;
  }
};

export const signInFunc = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/signin`, data);

    // Assuming the token is in response.data.token
    const token = response.data.token;

    return token;
  } catch (error) {
    console.error("Error creating student:", error);
    throw error;
  }
};

export const getUser = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/api/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export const updateUser = async (id, data) => {
  try {
    // DEğişecek
    const response = await axios.patch(`${API_URL}/api/user/${id}`, data);
  } catch (error) {
    console.error("Error creating student:", error);
    throw error;
  }
};
