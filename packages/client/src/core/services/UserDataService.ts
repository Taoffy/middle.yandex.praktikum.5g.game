import axios from 'axios';
import { UserAvatar, UserData, UserPassword } from '../../redux/types';

const api = axios.create({
  baseURL: 'https://ya-praktikum.tech/api/v2',
});

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
    });

    return response.data;
  }

  async changeUserPassword(data: UserPassword) {
    await api.put('/user/password', data, {
      withCredentials: true,
    });
  }
}

export default new UserDataService();
