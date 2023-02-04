import React, { useRef } from 'react'
import { connect, useDispatch } from 'react-redux'
import styles from './ChangePassword.module.scss'
import * as Actions from '../../../../redux/actions'

type ChangePasswordProps = {
    oldPassword: string;
    newPassword: string;
}

function ChangePassword(props: ChangePasswordProps) {
  const dispatch = useDispatch();
  const formEl = useRef(null);

  const onPasswordSubmit = (e: Event) => {
    e.preventDefault();

    const formData = new FormData(formEl.current as unknown as HTMLFormElement);

    const data = {
      oldPassword: formData.get('oldPassword'),
      newPassword: formData.get('newPassword'),
    }

    dispatch(Actions.changeUserPassword(data));
  }

  return (
    <div className={styles.password__container}>
      <h1 className={styles.password__header}> Изменить пароль</h1>
      <form id='change-password' action='' onSubmit={onPasswordSubmit} ref={formEl}>
        <input className={styles.password__input} type='password' placeholder='Старый пароль' name='oldPassword' />
        <input className={styles.password__input} type='password' placeholder='Новый пароль'  name='newPassword'  />

        <button className={styles.password__btn} type='submit'>Изменить пароль</button>
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
