import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ya-praktikum.tech/api/v2',
})

class UserDataService {

  async logIn() {
    const data = {
      login: "pavukkkkk",
      password: "12345asd",
    }
    await api.post('/auth/signin',data, {
      withCredentials: true,
    })
  }

  async getUser() {
    await api.get('/auth/user', {
      withCredentials: true,
    })
  }
}

export default new UserDataService();
