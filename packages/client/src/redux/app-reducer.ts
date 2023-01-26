import { actions, actionsType } from './types'

const initialState = {
  isAuth: false,
  user: {
    id: 1,
    first_name: 'Danila',
    second_name: 'Kryuchkov',
    display_name: 'pavuk',
    login: 'pavuk',
    email: 'blabla@mail.ru',
    phone: '+7(999)-999-99-99',
    avatar: '',
  },
};

const appReducer = (state = initialState, action: actions) => {
  switch (action.type) {
    case actionsType.changeData:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
};



export { appReducer };
