import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Profile.module.scss';
import { AvatarPopup } from '../../AvatarPopup/AvatarPopup';
import { Store } from '../../../redux/types';
import { useAppSelector } from '../../../hooks';

function Profile() {
  const [isPopupActive, setPopupActive] = useState(false);
  const user = useAppSelector((state: Store) => state.app.user);

  return (
    <>
      <div className={styles.profile}>
        <div className={styles.profile__container}>
          <h1 className={styles.profile__title}>Профиль</h1>

          <img
            className={styles.avatar}
            src={user.avatar}
            alt='user avatar'
            onClick={() => setPopupActive(true)}
          />

          <ul className={styles.profile__list}>
            <li className={styles.profile__item}>
              <span className={styles.profile__subtitle}>Имя:</span>
              <span className={styles.profile__info}>{user.first_name}</span>
            </li>
            <li className={styles.profile__item}>
              <span className={styles.profile__subtitle}>Фамилия:</span>
              <span className={styles.profile__info}>{user.second_name}</span>
            </li>
            <li className={styles.profile__item}>
              <span className={styles.profile__subtitle}>Логин:</span>
              <span className={styles.profile__info}>{user.login}</span>
            </li>
            <li className={styles.profile__item}>
              <span className={styles.profile__subtitle}>E-mail:</span>
              <span className={styles.profile__info}>{user.email}</span>
            </li>
            <li className={styles.profile__item}>
              <span className={styles.profile__subtitle}>Телефон:</span>
              <span className={styles.profile__info}>{user.phone}</span>
            </li>
          </ul>

          <Link className={styles.profile__btn} to='change-data'>
            Изменить данные
          </Link>
          <Link className={styles.profile__btn} to='change-password'>
            Изменить пароль
          </Link>
        </div>
      </div>

      {isPopupActive ? <AvatarPopup setPopupActive={setPopupActive} /> : ''}
    </>
  );
}

export default Profile;
