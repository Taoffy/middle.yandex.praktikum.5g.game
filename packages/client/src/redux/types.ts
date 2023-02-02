type User = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string | null;
};

export interface UserData {
  first_name: FormDataEntryValue | null,
  second_name: FormDataEntryValue | null,
  display_name: string,
  login: FormDataEntryValue | null,
  email: FormDataEntryValue | null,
  phone: FormDataEntryValue | null,
}

export type State = {
  isAuth: boolean;
  user: User;
};
export enum actionsType {
  setAUTH = 'setAUTH',
  setUserInfo = 'setUserInfo',
  changeData = 'CHANGE_DATA',
}
type signupAction = {
  type: actionsType.setAUTH;
  payload: boolean;
};
type setUserInfoAction = {
  type: actionsType.setUserInfo;
  payload: User;
};

type changeDataAction = {
  type: actionsType.changeData,
  payload: UserData,
}

export type actions = signupAction | setUserInfoAction | changeDataAction;
