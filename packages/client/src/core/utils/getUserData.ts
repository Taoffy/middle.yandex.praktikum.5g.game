import { serverURL } from '../config/api.config';

// @ts-ignore
export const getUserData = (data: UserServer): User => {
  return {
    id: data.id,
    login: data.login,
    firstName: data.first_name,
    secondName: data.second_name,
    displayName: data.display_name,
    avatar: data.avatar ? `${serverURL}/resources/${data.avatar}` : null,
    phone: data.phone,
    email: data.email
  };
};
