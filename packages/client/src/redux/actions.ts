import { actionsType, UserAvatar, UserData, UserPassword } from './types';
import UserDataService from '../core/services/UserDataService';
import { UserService } from '../core/services/UserService';

export const changeUserData = (userData: UserData) => {
  return async (dispatch: any) => {
    try {
      const response = await UserDataService.changeUserData(userData);

      dispatch({
        type: actionsType.changeData,
        payload: response,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const changeUserPassword = (userPassword: UserPassword) => {
  return async (dispatch: any) => {
    try {
      const response = await UserDataService.changeUserPassword(userPassword);

      dispatch({
        type: actionsType.changePassword,
        payload: response,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const changeUserAvatar = (data: UserAvatar | FormData) => {
  return async (dispatch: any) => {
    try {
      const response = await UserDataService.changeUserAvatar(data);
      const avatarPath = `https://ya-praktikum.tech/api/v2/resources${response.avatar}`;

      dispatch({
        type: actionsType.changeAvatar,
        payload: avatarPath,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export function setAuth(payload) {
  return { type: actionsType.setAUTH, payload };
}

// export async function signin(payload) {
//   try {
//     await UserService.signin(payload);
//     return { type: actionsType.setAUTH, payload: true };
//   } catch (error) {
//     console.error(error);
//   }
// }
export const signin = (payload) => async (dispatch) => {
  try {
    const response = await UserService.signin(payload);
    if (response.id) {
      dispatch({ type: actionsType.setAUTH, payload: true });
      dispatch(authUser());
    }
  } catch (error) {
    console.error(error);
  }
};
export const signup = (payload) => async (dispatch) => {
  try {
    const response = await UserService.signup(payload);
    if (response.id) {
      dispatch({ type: actionsType.setAUTH, payload: true });
    }
  } catch (error) {
    console.error(error);
  }
};
export const authUser = () => async (dispatch) => {
  try {
    console.log(123);
    const response = await UserService.authUser();
    if (response.id) {
      dispatch({ type: actionsType.setUserInfo, payload: response });
    }
  } catch (error) {
    console.error(error);
  }
};
