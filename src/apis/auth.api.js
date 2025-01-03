import axios from "axios";
import Host from "../configs/server";

export const login = async (userData) => {
  try {
    console.log("==========>");
    console.log(userData);
    const response = await axios.post(`${Host}/api/auth/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    return error;
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post(`${Host}/api/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering:", error);
    return error;
  }
};

export const verifyRegisterOtp = async (otp) => {
  try {
    const response = await axios.post(`${Host}/api/auth/verify-otp`, { otp });
    return response.data;
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return error;
  }
};

export const refreshToken = async () => {
  try {
    const response = await axios.post(`${Host}/api/auth/refresh-token`);
    return response.data;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return error;
  }
};
