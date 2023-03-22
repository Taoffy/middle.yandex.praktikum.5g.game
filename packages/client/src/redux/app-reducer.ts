import { actions, actionsType, State } from './types';

const initialState: State = {
  init: false,
  isAuth: false,
  isInitialApp: false,
  user: {
    id: 1,
    first_name: '',
    second_name: '',
    display_name: '',
    login: '',
    email: '',
    phone: '',
    avatar: '',
    theme: '',
  },
};

const appReducer = (state = initialState, action: actions): State => {
  switch (action.type) {
    case actionsType.changeData:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
          avatar: action.payload.avatar
            ? `https://ya-praktikum.tech/api/v2/resources/${action.payload.avatar}`
            : null,
        },
      };
    case actionsType.changeAvatar:
      return {
        ...state,
        user: { ...state.user, avatar: action.payload },
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

    case actionsType.setIsInitialApp:
      return {
        ...state,
        isInitialApp: action.payload,
      };
      break;

    case actionsType.setUserTheme:
      return {
        ...state,
        user: {
          ...state.user,
          theme: action.payload,
        }
      }
      break;
    default:
      return state;
  }
};

export { appReducer };
