export type User = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string | null;
  theme?: string;
};

export type State = {
  isAuth: boolean;
  isInitialApp: boolean;
  user: User;
};

export interface UserData {
  first_name: FormDataEntryValue | null;
  second_name: FormDataEntryValue | null;
  display_name: string;
  login: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  phone: FormDataEntryValue | null;
  avatar: FormDataEntryValue | null;
}

export interface UserAvatar {
  avatar: string;
}

export type UserPassword = {
  oldPassword: string;
  newPassword: string;
};

export enum actionsType {
  setAUTH = 'setAUTH',
  setUserInfo = 'setUserInfo',
  changeData = 'CHANGE_DATA',
  changeAvatar = 'CHANGE_AVATAR',
  changePassword = 'CHANGE_PASSWORD',
  setIsInitialApp = 'setIsInitialApp',
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

type changeAvatarAction = {
  type: actionsType.changeAvatar;
  payload: string;
};

type changeUserPassword = {
  type: actionsType.changePassword;
};

type setIsInitialApp = {
  type: actionsType.setIsInitialApp;
  payload: boolean;
};

export type actions =
  | signupAction
  | setUserInfoAction
  | changeDataAction
  | changeAvatarAction
  | changeUserPassword
  | setIsInitialApp;
