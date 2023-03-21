import axios from 'axios';
import { apiConfig } from './config';

const api = axios.create({
  withCredentials: true,
  baseURL: apiConfig.serverURL,
});

const expressApi = axios.create({
  baseURL: apiConfig.expressApi,
});

export { api, expressApi };
