import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Ensure this is the correct base URL
  withCredentials: true,  // Enable credentials if needed
});

export default api;
