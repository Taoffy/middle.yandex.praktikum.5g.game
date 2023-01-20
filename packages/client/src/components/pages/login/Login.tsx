import React, { FormEvent } from 'react';

import styles from './Login.module.scss';
import { useDispatch } from 'react-redux';
import * as Actions from '../../../redux/actions';
function LoginPage() {
  const dispatch = useDispatch();
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setHandler: (value: string) => void
  ) => {
    setHandler(event.target.value);
  };
  const sendData = (event: FormEvent) => {
    event.preventDefault();
    console.log(0);
    dispatch(Actions.login({ login, password }));
  };
  return (
    <main className={styles.login}>
      <div className={styles.centeredBox}>
        <div className={styles.centeredBox__inner}>
          <h1 className={styles.login__title}>Авторизация</h1>
          <form className={styles.form__wrapper} onSubmit={sendData}>
            <div className={styles.inputBox}>
              <input
                value={login}
                onChange={(e) => handleChange(e, setLogin)}
                type="text"
                className={styles.input}
                placeholder="Логин"
              />
            </div>
            <div className={styles.inputBox}>
              <input
                value={password}
                onChange={(e) => handleChange(e, setPassword)}
                type="password"
                className={styles.input}
                placeholder="Пароль"
              />
            </div>
            <button className={styles.form__btnSubmit} type="submit">
              Войти
            </button>
          </form>
          <a className={styles.form__link} href="#">
            Зарегистрироваться
          </a>
        </div>
      </div>
    </main>
  );
}

export { LoginPage };
