import { actionsType, UserData, UserPassword } from './types';
import UserDataService from '../core/services/UserDataService';
import {
  LoginRequestData,
  LoginRequestDataOauth,
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
export const logout = () => async () => {
  try {
    await UserService.logout();
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
      }
    } catch (error) {
      console.error(error);
    }
  };
export const authUser = () => async (dispatch: AppDispatch) => {
  try {
    const response = await UserService.authUser();
    if (response?.id) {
      dispatch({ type: actionsType.setUserInfo, payload: response });
      dispatch({ type: actionsType.setAUTH, payload: true });
    }
  } catch (error) {
    console.error(error);
  } finally {
    dispatch({ type: actionsType.setInit, payload: true });
  }
};
export const getIdOAuth = (redirect_uri: string) => async () => {
  try {
    const response = await UserService.getIdOAuth(redirect_uri);
    const urlYandexAuth = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${response.service_id}&redirect_uri=${redirect_uri}`;
    window.open(urlYandexAuth, '_self');
  } catch (error) {
    console.error(error);
  }
};
export const signinOAuth =
  (data: LoginRequestDataOauth) => async (dispatch: AppDispatch) => {
    try {
      await UserService.signinOAuth(data);
      dispatch(authUser());
    } catch (error) {
      console.error(error);
    }
  };
