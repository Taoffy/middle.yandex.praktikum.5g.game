export type State = {
  isAuth: boolean;
  user: User;
};
export enum actionsType {
  setAUTH = 'setAUTH',
}
export type actionsPayload = {
  setAUTH: boolean;
};

export type ItemActionType = {
  type: actionsType;
  payload: actionsPayload[actionsType];
};
