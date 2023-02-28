import axios from 'axios';
import { UserAvatar, UserData } from '../../redux/types';

const api = axios.create({
  baseURL: 'https://ya-praktikum.tech/api/v2'
});

class UserDataService {
  async logIn() {
    const data = {
      login: 'pavukkkkk',
      password: '12345asd'
    };
    await api.post('/auth/signin', data, {
      withCredentials: true
    });
  }

  async getUser() {
    await api.get('/auth/user', {
      withCredentials: true
    });
  }

  async changeUserAvatar(data: UserAvatar | FormData) {
    const response = await api
      .put('user/profile/avatar', data, {
        withCredentials: true
      })
      .then((res) => res.data);

    return response;
  }

  async changeUserData(data: UserData) {
    const response = await api.put('/user/profile', data, {
      withCredentials: true
    });

    return response.data;
  }
}

export default new UserDataService();
