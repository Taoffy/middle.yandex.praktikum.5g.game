import CHANGE_USER_DATA from './actions/profile/profileActions'

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

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_USER_DATA:
      return {...state.user, ...action.payload}
    default:
      return state;
  }
};


export { appReducer, profileReducer };
