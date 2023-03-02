import { User } from '../../redux/types';
import { api } from '../api';
import { apiHasError } from '../utils/apiHasError';
import { AxiosResponse } from 'axios';

export type LoginRequestData = {
  login: string;
  password: string;
};
export type RegistrationRequestData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

enum AuthPath {
  signup = '/auth/signup',
  signin = '/auth/signin',
  authUser = '/auth/user',
  logout = '/auth/logout',
}

class UserServiceClass {
  private checkAnswer<T>(response: AxiosResponse<T>) {
    if (response.status !== 200) {
      if (apiHasError(response.data)) {
        throw new Error(response.data.reason);
      }
      throw new Error(response.statusText);
    }
    return response.data;
  }

  async signup(data: RegistrationRequestData) {
    const response = await api.post<
      string,
      AxiosResponse<string>,
      RegistrationRequestData
    >(AuthPath.signup, data);
    return this.checkAnswer<string>(response);
  }

  async signin(data: LoginRequestData) {
    const response = await api.post<
      string,
      AxiosResponse<string>,
      LoginRequestData
    >(AuthPath.signin, data);
    return this.checkAnswer<string>(response);
  }

  async authUser() {
    try {
      const response = await api.get<string, AxiosResponse<User>>(
        AuthPath.authUser
      );

      return this.checkAnswer<User>(response);
    } catch (error) {
      console.error(error);
    }
  }

  async logout() {
    try {
      const response = await api.post<string, AxiosResponse<string>>(
        AuthPath.logout
      );
      return this.checkAnswer<string>(response);
    } catch (error) {
      console.error(error);
    }
  }
}

export const UserService = new UserServiceClass();
