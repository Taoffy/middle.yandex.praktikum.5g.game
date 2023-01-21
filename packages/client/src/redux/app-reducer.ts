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

export { appReducer };
