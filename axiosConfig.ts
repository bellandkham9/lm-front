//axiosConfig.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:3005/dictionnaire/traductions/?langue=1',  // Remplacez par l'URL de votre API
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;