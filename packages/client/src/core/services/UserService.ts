import { User } from '../../redux/types';
import { api } from '../api';
import { AxiosResponse } from 'axios';
import { BasicServiceClass } from './BasicService';

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

class UserServiceClass extends BasicServiceClass {
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
    >(AuthPath.signin, data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return this.checkAnswer<string>(response);
  }

  async authUser() {
    try {
      const response = await api.get<string, AxiosResponse<User>>(
        AuthPath.authUser,
        { headers: { accept: 'application/json' } }
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
