import { UserData } from '../../../components/pages/Profile/ChangeData/ChangeData'
import UserDataService from '../../../core/services/UserDataService'
import CHANGE_USER_DATA from '../../actions/profile/profileActions'

export function changeUserData(userData: UserData) {
  return (dispatch: any): void => {
    UserDataService.changeUserData(userData)
      .then(response => {
        console.log(response)
        dispatch({
          type: CHANGE_USER_DATA,
          payload: response.data,
        })
      }).catch(error => console.log(error));
  }
}
