import { actionsType, UserData } from './types';
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
    }
  } catch (error) {
    console.error(error);
  }
};
