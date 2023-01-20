import { ItemActionType, State, actionsType } from './types';

const initialState: State = {
  isAuth: false,
  user: {
    id: 1,
    first_name: '',
    second_name: '',
    display_name: '',
    login: '',
    email: '',
    phone: '',
    avatar: '',
  },
};

const appReducer = (state = initialState, action: ItemActionType): State => {
  switch (action.type) {
    case actionsType.setAUTH:
      console.log(state, action.payload);

      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};

export { appReducer };
