import React, { FormEvent, useRef } from 'react';

import * as Actions from '../../../../redux/actions';
import { useAppDispatch } from '../../../hooks/AppUseSelectorAndDispathch';

import BackButton from '../../../common/BackButton';
import { ROUTES } from '../../../../utils';

import styles from './ChangePassword.module.scss';

function ChangePassword() {
  const dispatch = useAppDispatch();
  const formEl = useRef(null);

  const onPasswordSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(formEl.current as unknown as HTMLFormElement);

    const data = {
      oldPassword: formData.get('oldPassword') as string,
      newPassword: formData.get('newPassword') as string,
    };

    dispatch(Actions.changeUserPassword(data));
  };

  return (
    <div className={styles.password__container}>
      <BackButton to={ROUTES.profile} />
      <h1 className={styles.password__header}> Изменить пароль</h1>
      <form
        id="change-password"
        action=""
        onSubmit={onPasswordSubmit}
        ref={formEl}>
        <input
          className={styles.password__input}
          type="password"
          placeholder="Старый пароль"
          name="oldPassword"
        />
        <input
          className={styles.password__input}
          type="password"
          placeholder="Новый пароль"
          name="newPassword"
        />

        <button className={styles.password__btn} type="submit">
          Изменить пароль
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;
