import React from 'react';

import styles from './Login.module.scss';

function LoginPage() {
  return (
    <main className={styles.login}>
      <div className={styles.centeredBox}>
        <div className={styles.centeredBox__inner}>
          <h1 className={styles.login__title}>Авторизация</h1>
          <form className={styles.form__wrapper}>
            <div className={styles.inputBox}>
              <input type="text" className={styles.input} placeholder="Логин" />
            </div>
            <div className={styles.inputBox}>
              <input
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
