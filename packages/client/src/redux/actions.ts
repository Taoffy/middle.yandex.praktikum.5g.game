import {
  LoginRequestData,
  RegistrationRequestData,
  UserService,
} from '../core/services/UserService';
import { actionsType } from './types';

export function setAuth(payload: boolean) {
  console.log(2);
  return { type: actionsType.setAUTH, payload };
}
export async function signin(payload: LoginRequestData) {
  try {
    await UserService.signin(payload);
    return { type: actionsType.setAUTH, payload: true };
  } catch (error) {
    console.error(error);
  }
}
export async function signup(payload: RegistrationRequestData) {
  console.log(1);
  try {
    await UserService.signup(payload);
    return { type: actionsType.setAUTH, payload: true };
  } catch (error) {
    console.error(error);
  }
}
