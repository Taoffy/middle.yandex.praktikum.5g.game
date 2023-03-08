import { api } from '../api';
import { UserAvatar, UserData, UserPassword } from '../../redux/types';

class UserDataService {
  async changeUserAvatar(data: UserAvatar | FormData) {
    const response = await api
      .put('user/profile/avatar', data, {
        withCredentials: true,
      })
      .then((res) => res.data);

    return response;
  }

  async changeUserData(data: UserData) {
    const response = await api.put('/user/profile', data, {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    });

    return response.data;
  }

  async changeUserPassword(data: UserPassword) {
    await api.put('/user/password', data, {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export default new UserDataService();
