import axios from 'axios';
import { apiConfig } from './config';

const api = axios.create({
  withCredentials: true,
  baseURL: apiConfig.serverURL,
});

const myApi = axios.create({
  withCredentials: true,
  baseURL: apiConfig.myServerURL,
});

export { api, myApi };
