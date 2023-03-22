export const serverURL = 'https://ya-praktikum.tech/api/v2';
export const oauthCallback =
  import.meta.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : import.meta.env.OAUTH_CALLBACK;
export const expressApi =
  import.meta.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/api'
    : import.meta.env.EXPRESS_API;
