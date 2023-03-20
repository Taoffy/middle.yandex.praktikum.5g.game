import React, { FormEvent } from 'react';

import * as Actions from '../../../redux/actions';
import { useAppDispatch } from '../../hooks/AppUseSelectorAndDispathch';

import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils';

import styles from './Login.module.scss';

function LoginPage() {
  const dispatch = useAppDispatch();
  const [form, setForm] = React.useState<Form>({
    login: {
      value: '',
      type: 'text',
      placeholder: 'Логин',
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
      login: form.login.value,
      password: form.password.value,
    };
  };
  const sendData = (event: FormEvent) => {
    event.preventDefault();
    dispatch(Actions.signin(getFormValues()));
  };
  const OathHandler = () => {
    dispatch(Actions.getIdOAuth());
  };
  return (
    <main className={styles.login}>
      <div className={styles.centeredBox}>
        <div className={styles.centeredBox__inner}>
          <h1 className={styles.login__title}>Авторизация</h1>
          <form className={styles.form__wrapper} onSubmit={sendData}>
            {Object.entries(form).map(([key, item]) => (
              <div className={styles.inputBox} key={key}>
                <input
                  className={styles.input}
                  value={form[key].value}
                  name={key}
                  type={item.type}
                  placeholder={item.placeholder}
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    handleInputChange(key, e.currentTarget.value)
                  }
                />
              </div>
            ))}
            <button className={styles.form__btnSubmit} type="submit">
              Войти
            </button>
            <button onClick={OathHandler}>войти через yandexId</button>
          </form>
          <Link className={styles.form__link} to={ROUTES.signUp}>
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </main>
  );
}

export { LoginPage };
