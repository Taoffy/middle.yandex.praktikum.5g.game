import { actionsType, UserData } from './types'
import UserDataService from '../core/services/UserDataService'
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
  }
}

// @ts-ignore
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
// @ts-ignore
export const signin = (payload) => async (dispatch) => {
  try {
    const response = await UserService.signin(payload);
    // @ts-ignore
    if (response.id) {
      dispatch({ type: actionsType.setAUTH, payload: true });
      dispatch(authUser());
    }
  } catch (error) {
    console.error(error);
  }
};
// @ts-ignore
export const signup = (payload) => async (dispatch) => {
  try {
    const response = await UserService.signup(payload);
    // @ts-ignore
    if (response.id) {
      dispatch({ type: actionsType.setAUTH, payload: true });
    }
  } catch (error) {
    console.error(error);
  }
};
// @ts-ignore
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
