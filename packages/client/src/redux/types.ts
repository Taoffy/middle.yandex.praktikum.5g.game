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
  oldPassword: FormDataEntryValue | null;
  newPassword: FormDataEntryValue | null;
};

export type State = {
  init: boolean;
  isAuth: boolean;
  isInitialApp: boolean;
  user: User;
};

export enum actionsType {
  setAUTH = 'setAUTH',
  setUserInfo = 'setUserInfo',
  changeData = 'CHANGE_DATA',
  setInit = 'setInit',
  changeAvatar = 'CHANGE_AVATAR',
  changePassword = 'CHANGE_PASSWORD',
  setIsInitialApp = 'setIsInitialApp',

  setUserTheme = 'SET_USER_THEME',
}

type setUserThemeAction = {
  type: actionsType.setUserTheme;
  payload: string;
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
  payload: User;
};

type setInitAction = {
  type: actionsType.setInit;
  payload: boolean;
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
  | setInitAction
  | changeAvatarAction
  | changeUserPassword
  | setIsInitialApp
  | setUserThemeAction;
