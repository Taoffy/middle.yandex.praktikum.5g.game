import { UserService } from '../core/services/UserService';
import { actionsType } from './types';
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
