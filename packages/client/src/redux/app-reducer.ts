import { State, actions, actionsType } from './types';

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

const appReducer = (state = initialState, action: actions) => {
  switch (action.type) {
    case actionsType.changeData:
      return {
        ...state,
        user: action.payload,
      };
      break;
    case actionsType.setAUTH:
      return {
        ...state,
        isAuth: action.payload,
      };
      break;
    case actionsType.setUserInfo:
      return {
        ...state,
        user: action.payload,
      };
      break;
    default:
      return state;
  }
};

export { appReducer };
