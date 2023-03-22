export const serverURL = 'https://ya-praktikum.tech/api/v2';
export const oauthCallback = import.meta.env.OAUTH_CALLBACK
  ? process.env.OAUTH_CALLBACK
  : 'http://localhost:3000';
export const expressApi = import.meta.env.EXPRESS_API
  ? process.env.EXPRESS_API
  : 'http://localhost:3001/api';
