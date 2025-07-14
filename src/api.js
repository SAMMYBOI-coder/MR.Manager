import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const loginUser = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

export const registerUser = (name, email, password) => {
  return axios.post(`${API_URL}/register`, { name, email, password });
};
