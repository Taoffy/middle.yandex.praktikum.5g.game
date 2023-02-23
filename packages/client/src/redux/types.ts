export type User = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string | null;
};
export type State = {
  init: boolean;
  isAuth: boolean;
  user: User;
};
export enum actionsType {
  setAUTH = 'setAUTH',
  setUserInfo = 'setUserInfo',
  setInit = 'setInit',
}
type signupAction = {
  type: actionsType.setAUTH;
  payload: boolean;
};
type setUserInfoAction = {
  type: actionsType.setUserInfo;
  payload: User;
};
type setInitAction = {
  type: actionsType.setInit;
  payload: boolean;
};
export type actions = signupAction | setUserInfoAction | setInitAction;
