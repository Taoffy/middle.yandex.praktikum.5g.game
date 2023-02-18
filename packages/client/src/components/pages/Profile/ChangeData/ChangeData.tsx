import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ChangeData.module.scss';
import { Store, UserData } from '../../../../redux/types';
import * as Actions from '../../../../redux/actions';

function ChangeData() {
  const dispatch = useDispatch() as any;
  const formEl = useRef(null);
  const user = useSelector((state: Store) => state.app.user);

  const onDataSubmit = async (e: Event) => {
    e.preventDefault();

    const formData = new FormData(formEl.current as unknown as HTMLFormElement);

    const data: UserData = {
      first_name: formData.get('first_name'),
      second_name: formData.get('second_name'),
      login: formData.get('login'),
      email: formData.get('email'),
      display_name: '',
      phone: formData.get('phone'),
      avatar: '',
    };

    dispatch(Actions.changeUserData(data));
  };

  return (
    <div className={styles.data__container}>
      <h1 className={styles.data__header}>Изменить данные</h1>
      <form id="change-data" onSubmit={onDataSubmit} ref={formEl}>
        <input
          className={styles.data__input}
          type="text"
          placeholder={user.first_name}
          name="first_name"
        />
        <input
          className={styles.data__input}
          type="text"
          placeholder={user.second_name}
          name="second_name"
        />
        <input
          className={styles.data__input}
          type="text"
          placeholder={user.login}
          name="login"
        />
        <input
          className={styles.data__input}
          type="email"
          placeholder={user.email}
          name="email"
        />
        <input
          className={styles.data__input}
          type="tel"
          placeholder={user.phone}
          name="phone"
        />

        <button className={styles.data__btn} type="submit">
          Сохранить
        </button>
      </form>
    </div>
  );
}

export default ChangeData;
