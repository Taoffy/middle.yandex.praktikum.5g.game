export const serverURL = 'https://ya-praktikum.tech/api/v2';
export const expressApi =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/api'
    : process.env.EXPRESS_API;
