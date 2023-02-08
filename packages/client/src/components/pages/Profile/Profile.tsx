import React from 'react';

import styles from './Profile.module.scss';

function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__container}>
        <h1 className={styles.profile__title}>Профиль</h1>

        <img
          className={styles.avatar}
          src="https://via.placeholder.com/64"
          alt="user avatar"
        />

        <ul className={styles.profile__list}>
          <li className={styles.profile__item}>
            <span className={styles.profile__subtitle}>Имя:</span>
            <span className={styles.profile__info}>Константин</span>
          </li>
          <li className={styles.profile__item}>
            <span className={styles.profile__subtitle}>Фамилия:</span>
            <span className={styles.profile__info}>Константинопольский</span>
          </li>
          <li className={styles.profile__item}>
            <span className={styles.profile__subtitle}>Логин:</span>
            <span className={styles.profile__info}>constantinTheBest</span>
          </li>
          <li className={styles.profile__item}>
            <span className={styles.profile__subtitle}>E-mail:</span>
            <span className={styles.profile__info}>constantin@mail.ru</span>
          </li>
          <li className={styles.profile__item}>
            <span className={styles.profile__subtitle}>Телефон:</span>
            <span className={styles.profile__info}>+7 999 999 99 99</span>
          </li>
        </ul>

        <button className={styles.profile__btn}>Изменить данные</button>
        <button className={styles.profile__btn}>Изменить пароль</button>
      </div>
    </div>
  );
}

export { Profile };
