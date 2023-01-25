import axios from 'axios';
import { apiConfig } from './config';

const api = axios.create({
  withCredentials: true,
  baseURL: apiConfig.serverURL,
});

export { api };
