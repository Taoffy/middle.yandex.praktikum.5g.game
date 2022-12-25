import { api } from '../api'
import { apiHasError } from '../utils/apiHasError'
import { transformUser } from '../utils/apiTransformers'
import { AxiosResponse } from 'axios'
type LoginRequestData = {
  login: string
  password: string
}
type RegistrRequestData = {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

class UserService {
  checkAnswer<T>(response: AxiosResponse<T>) {
    if (response.status !== 200) {
      if (apiHasError(response.data)) {
        throw new Error(response.data.reason)
      }
      throw new Error(response.statusText)
    }
    return response.data
  }
  async registration(data: RegistrRequestData) {
    try {
      const response = await api.post<
        string,
        AxiosResponse<string>,
        RegistrRequestData
      >('/auth/signup', data)
      return this.checkAnswer<string>(response)
    } catch (error) {
      console.error(error)
    }
  }
  async login(data: LoginRequestData) {
    try {
      const response = await api.post<
        string,
        AxiosResponse<string>,
        LoginRequestData
      >('/auth/signin', data)
      return this.checkAnswer<string>(response)
    } catch (error) {
      console.error(error)
    }
  }
  async getUserInfo() {
    try {
      const response = await api.get<string, AxiosResponse<UserDTO>>(
        '/auth/user'
      )
      return transformUser(this.checkAnswer<UserDTO>(response))
    } catch (error) {
      console.error(error)
    }
  }
  async logout() {
    try {
      const response = await api.post<string, AxiosResponse<string>>(
        '/auth/logout'
      )
      return this.checkAnswer<string>(response)
    } catch (error) {
      console.error(error)
    }
  }
}

export const myService = new UserService()
