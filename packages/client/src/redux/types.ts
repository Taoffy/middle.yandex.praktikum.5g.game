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

export type Store = {
  app: {
    isAuth: false;
    user: {
      id: 1;
      first_name: '';
      second_name: '';
      display_name: '';
      login: '';
      email: '';
      phone: '';
      avatar: '';
    };
  };
};

export interface UserData {
  first_name: FormDataEntryValue | null;
  second_name: FormDataEntryValue | null;
  display_name: string;
  login: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  phone: FormDataEntryValue | null;
}

export type State = {
  init: boolean;
  isAuth: boolean;
  user: User;
};

export enum actionsType {
  setAUTH = 'setAUTH',
  setUserInfo = 'setUserInfo',
  changeData = 'CHANGE_DATA',
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

type changeDataAction = {
  type: actionsType.changeData;
  payload: UserData;
};

type setInitAction = {
  type: actionsType.setInit;
  payload: boolean;
};
export type actions =
  | signupAction
  | setUserInfoAction
  | changeDataAction
  | setInitAction;
