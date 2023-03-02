import { User, UserAvatar, UserData, UserPassword } from '../../redux/types';
import { api } from '../api';
import { OauthCallback } from '../config/api.config';
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
export type YandexClientIdResponse = {
  service_id: string;
};

enum UserPath {
  signup = '/auth/signup',
  signin = '/auth/signin',
  authUser = '/auth/user',
  logout = '/auth/logout',
  changePassword = '/user/password',
  changeUserData = '/user/profile',
  changeUserAvatar = 'user/profile/avatar',
}

enum Oauth {
  signin = '/oauth/yandex',
  getId = '/oauth/yandex/service-id',
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
    >(UserPath.signup, data);
    return this.checkAnswer<string>(response);
  }

  async signin(data: LoginRequestData) {
    const response = await api.post<
      string,
      AxiosResponse<string>,
      LoginRequestData
    >(UserPath.signin, data);
    return this.checkAnswer<string>(response);
  }

  async authUser() {
    try {
      const response = await api.get<string, AxiosResponse<User>>(
        UserPath.authUser
      );
      return this.checkAnswer<User>(response);
    } catch (error) {
      console.error(error);
    }
  }

  async logout() {
    try {
      const response = await api.post<string, AxiosResponse<string>>(
        UserPath.logout
      );
      return this.checkAnswer<string>(response);
    } catch (error) {
      console.error(error);
    }
  }
  async getIdOAuth() {
    try {
      const response = await api.get<
        string,
        AxiosResponse<YandexClientIdResponse>
      >(`${Oauth.getId}?redirect_uri=${OauthCallback}`);
      return this.checkAnswer<YandexClientIdResponse>(response);
    } catch (error) {
      console.error(error);
    }
  }
  async signinOAuth(code: string) {
    try {
      const response = await api.post<string, AxiosResponse<string>>(
        Oauth.signin,
        {
          redirect_uri: OauthCallback,
          code,
        }
      );
      return this.checkAnswer<string>(response);
    } catch (error) {
      console.error(error);
    }
  }
  async changeUserData(data: UserData) {
    try {
      const response = await api.put<string, AxiosResponse<User>>(
        UserPath.changeUserData,
        data
      );
      return this.checkAnswer<User>(response);
    } catch (error) {
      console.error(error);
    }
  }

  async changeUserPassword(data: UserPassword) {
    try {
      const response = await api.put<string, AxiosResponse<string>>(
        UserPath.changePassword,
        data
      );
      this.checkAnswer<string>(response);
    } catch (error) {
      console.error(error);
    }
  }
  async changeUserAvatar(data: UserAvatar | FormData) {
    try {
      const response = await api.put<
        UserAvatar | FormData,
        AxiosResponse<User>
      >(UserPath.changeUserAvatar, data);
      return this.checkAnswer<User>(response);
    } catch (error) {
      console.error(error);
    }
  }
}

export const UserService = new UserServiceClass();
