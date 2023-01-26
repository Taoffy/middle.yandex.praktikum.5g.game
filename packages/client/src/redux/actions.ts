import { actionsType, UserData } from './types'
import UserDataService from '../core/services/UserDataService'

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
