import { UserService } from '../core/services/UserService';
import { actionsType } from './types';
export function setAuth(payload) {
  return { type: actionsType.setAUTH, payload };
}
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
export const logout = () => async () => {
  try {
    await UserService.logout();
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
export const gitIdOAuth = (redirect_uri) => async () => {
  try {
    const response = await UserService.gitIdOAuth(redirect_uri);
    const urlYandexAuth = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${response.service_id}&redirect_uri=${redirect_uri}`;
    window.open(urlYandexAuth, '_self');
  } catch (error) {
    console.error(error);
  }
};
export const signinOAuth = (data) => async (dispatch) => {
  try {
    await UserService.signinOAuth(data);
    dispatch(authUser());
  } catch (error) {
    console.error(error);
  }
};
