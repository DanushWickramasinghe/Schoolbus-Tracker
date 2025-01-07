import axios from 'axios';
import Host from '../configs/server';

export const login = async (userData) => {
  try {
    const response = await axios.post(`${Host}/api/auth/login`, userData);
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    return response.data;
  } catch (error) {
    console.error(error.response.data.message);
    return error.response.data.message;
  }
};

export const getAccessTokenWithRefreshToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await axios.get(`${Host}/api/auth/access-token`, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const logout = () => {
  try {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  } catch (error) {
    console.error('Error logging out:', error);
  }
};

export const registerData = async (userData) => {
  try {
    const response = await axios.post(`${Host}/api/auth/register`, userData);
    localStorage.setItem('email', response.data.email);
    return response.data;
  } catch (error) {
    console.error('Error registering:', error);
    return error.response.data.message;
  }
};

export const verifyRegisterOtp = async (otpPasswordData) => {
  const compltedData = {
    email: localStorage.getItem('email'),
    otp: otpPasswordData.otp,
    password: otpPasswordData.password,
  };
  try {
    const response = await axios.post(
      `${Host}/api/auth/verify-otp`,
      compltedData
    );
    return response.data;
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return error;
  }
};
