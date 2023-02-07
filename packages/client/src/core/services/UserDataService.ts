import axios from 'axios';
import { UserData, UserPassword } from '../../redux/types';

const api = axios.create({
  baseURL: 'https://ya-praktikum.tech/api/v2',
});

class UserDataService {
  async changeUserData(data: UserData) {
    await api.put('/user/profile', data, {
      withCredentials: true,
    });

    return data;
  }

  async changeUserPassword(data: UserPassword) {
    await api.put('/user/password', data, {
      withCredentials: true,
    });
  }
}

export default new UserDataService();
