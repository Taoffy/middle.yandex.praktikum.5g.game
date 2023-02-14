import React, { FormEvent } from 'react';
import styles from './SignUp.module.scss';
import { useDispatch } from 'react-redux';
// @ts-ignore
import * as Actions from '../../../redux/actions';
function SignUpPage() {
  const dispatch = useDispatch();
  const [form, setForm] = React.useState<Form>({
    first_name: {
      value: '',
      type: 'text',
      placeholder: 'Имя',
    },
    second_name: {
      value: '',
      type: 'text',
      placeholder: 'Фамилия',
    },
    login: {
      value: '',
      type: 'text',
      placeholder: 'Логин',
    },
    email: {
      value: '',
      type: 'email',
      placeholder: 'E-mail',
    },
    phone: {
      value: '',
      type: 'tel',
      placeholder: 'Телефон',
    },
    password: {
      value: '',
      type: 'password',
      placeholder: 'Пароль',
    },
  });
  const handleInputChange = (key: string, value: string) => {
    setForm({
      ...form,
      [key]: { ...form[key], value },
    } as Form);
  };
  const getFormValues = () => {
    return {
      first_name: form.first_name.value,
      second_name: form.second_name.value,
      login: form.login.value,
      email: form.email.value,
      password: form.password.value,
      phone: form.phone.value,
    };
  };
  const sendData = (event: FormEvent) => {
    event.preventDefault();
    dispatch(Actions.signup(getFormValues()));
  };
  return (
    <div className={styles.registration}>
      <div className={styles.registration__container}>
        <h1 className={styles.registration__title}>Регистрация</h1>
        <form className={styles.registration__form} onSubmit={sendData}>
          {Object.entries(form).map(([key, item]) => (
            <input
              className={styles.registration__item}
              value={form[key].value}
              name={key}
              type={item.type}
              placeholder={item.placeholder}
              key={key}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                handleInputChange(key, e.currentTarget.value)
              }
            />
          ))}
          <button className={styles.registration__btn} type="submit">
            Зарегистрироваться
          </button>
        </form>

        <a className={styles.registration__login} href="/login">
          Войти
        </a>
      </div>
    </div>
  );
}

export { SignUpPage };
