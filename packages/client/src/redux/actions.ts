import { actionsType, UserAvatar, UserData, UserPassword } from './types';
import {
  LoginRequestData,
  RegistrationRequestData,
  UserService,
} from '../core/services/UserService';
import { AppDispatch } from './store';

export const changeUserData = (userData: UserData) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.changeUserData(userData);
      if (response) {
        dispatch({
          type: actionsType.changeData,
          payload: response,
        });
      }
    } catch (e) {
      console.error(e);
    }
  };
};

export const changeUserPassword = (userPassword: UserPassword) => {
  return async () => {
    try {
      await UserService.changeUserPassword(userPassword);
    } catch (e) {
      console.error(e);
    }
  };
};

export const changeUserAvatar = (data: UserAvatar | FormData) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.changeUserAvatar(data);
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
export const getIdOAuth = () => async () => {
  try {
    const response = await UserService.getIdOAuth();
    if (response) {
      const urlYandexAuth = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${response.service_id}&redirect_uri=${OauthCallback}`;
      window.open(urlYandexAuth, '_self');
    } else {
      console.error('пустой ответ от oauth.yandex.ru');
    }
  } catch (error) {
    console.error(error);
  }
};
export const signinOAuth = (code: string) => async (dispatch: AppDispatch) => {
  try {
    await UserService.signinOAuth(code);
    dispatch(authUser());
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
