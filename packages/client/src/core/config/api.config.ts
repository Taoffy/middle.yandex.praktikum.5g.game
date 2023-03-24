export const serverURL = 'https://ya-praktikum.tech/api/v2';
export const oauthCallback = import.meta.env.VITE_OAUTH_CALLBACK
  ? import.meta.env.VITE_OAUTH_CALLBACK
  : 'http://localhost:3001';
export const expressApi = import.meta.env.VITE_EXPRESS_API
  ? import.meta.env.VITE_EXPRESS_API
  : 'http://localhost:3001/api';
