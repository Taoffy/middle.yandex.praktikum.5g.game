import React from 'react';
import { connect } from 'react-redux';
import styles from './ChangePassword.module.scss';
import { Link } from 'react-router-dom';

function ChangePassword() {
  return (
    <div className={styles.password__container}>
      <h1 className={styles.password__header}> Изменить пароль</h1>
      <form id="change-password" action="">
        <input
          className={styles.password__input}
          type="password"
          placeholder="Старый пароль"
        />
        <input
          className={styles.password__input}
          type="password"
          placeholder="Новый пароль"
        />

        <Link className={styles.password__btn} to="/profile">
          Изменить пароль
        </Link>
      </form>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    first_name: state.app.user.first_name,
    second_name: state.app.user.second_name,
    display_name: state.app.user.display_name,
    login: state.app.user.login,
    email: state.app.user.email,
    phone: state.app.user.phone,
  };
};

export default connect(mapStateToProps)(ChangePassword);
