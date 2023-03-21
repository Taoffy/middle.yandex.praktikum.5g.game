import { actionsType, User, UserAvatar, UserData, UserPassword } from './types';
import UserDataService from '../core/services/UserDataService';
import {
  LoginRequestData,
  RegistrationRequestData,
  UserService,
} from '../core/services/UserService';
import { AppDispatch } from './store';

export const changeUserData = (userData: UserData) => {
  return async (dispatch: AppDispatch) => {
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
  return async (dispatch: AppDispatch) => {
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
  return async (dispatch: AppDispatch) => {
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

export function setAuth(payload: boolean) {
  return { type: actionsType.setAUTH, payload };
}

export const signin =
  (payload: LoginRequestData) => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.signin(payload);
      if (response) {
        dispatch({ type: actionsType.setAUTH, payload: true });
        dispatch(authUser());
      }
    } catch (error) {
      console.error(error);
    }
  };
export const signup =
  (payload: RegistrationRequestData) => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.signup(payload);
      if (response) {
        dispatch({ type: actionsType.setAUTH, payload: true });
        dispatch(authUser());
      }
    } catch (error) {
      console.error(error);
    }
  };
export const authUser = () => async (dispatch: AppDispatch) => {
  try {
    const response = await UserService.authUser();
    if (response && response.id) {
      dispatch({ type: actionsType.setUserInfo, payload: response });
      dispatch({ type: actionsType.setAUTH, payload: true });
    }
  } catch (error) {
    console.error(error);
  }
};

export const setInitialApp = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(authUser());
    dispatch({ type: actionsType.setIsInitialApp, payload: true });
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => async (dispatch: AppDispatch) => {
  try {
    const response = await UserService.logout();
    if (response) {
      dispatch({ type: actionsType.setAUTH, payload: false });
    }
  } catch (error) {
    console.log(error);
  }
};

export const setUserExpress = (user: User) => async () => {
  try {
    await UserService.setUserExpress({
      ...user,
      theme: user.theme || 'light',
    });
  } catch (error) {
    console.log(error);
  }
};

export const setUserTheme = (theme: string) => async (dispatch: AppDispatch) => {
  try {
    const userTheme = await UserService.setUserTheme(theme);
    dispatch({type: actionsType.setUserTheme, payload: userTheme});
  } catch (error) {
    console.log(error);
  }
};
