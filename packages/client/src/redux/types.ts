type valueof<T> = T[keyof T];
export type State = {
  isAuth: boolean;
  user: User;
};
export enum actionsType {
  setAUTH = 'setAUTH',
  setUserInfo = 'setUserInfo',
}
type signupAction = {
  type: actionsType.setAUTH;
  payload: boolean;
};
type setUserInfoAction = {
  type: actionsType.setUserInfo;
  payload: User;
};
// export type actions = {
//   setAUTH: {
//     type: actionsType.setAUTH;
//     payload: boolean;
//   };
//   setUserInfo: {
//     type: actionsType.setAUTH;
//     payload: User;
//   };
// };
export type actions = signupAction | setUserInfoAction;

// export type ItemActionType = {
//   type: actionsType;
//   payload: actionsPayload[keyof actionsPayload];
// };
