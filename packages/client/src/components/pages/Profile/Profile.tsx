import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Profile.module.scss'
import { connect } from 'react-redux'
import { AvatarPopup } from '../../AvatarPopup/AvatarPopup'

interface ProfileProps {
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string,
}

function Profile(props: ProfileProps) {

  const [isPopupActive, setPopupActive] = useState(false);

  return (
    <div>
    <div className={styles.profile}>
      <div className={styles.profile__container}>
        <h1 className={styles.profile__title}>Профиль</h1>

          <img className={styles.avatar} src='https://via.placeholder.com/64' alt='user avatar' onClick={() => setPopupActive(true)} />

          <ul className={styles.profile__list}>
            <li className={styles.profile__item}>
              <span className={styles.profile__subtitle}>Имя:</span>
              <span className={styles.profile__info}>{props.first_name}</span>
            </li>
            <li className={styles.profile__item}>
              <span className={styles.profile__subtitle}>Фамилия:</span>
              <span className={styles.profile__info}>{props.second_name}</span>
            </li>
            <li className={styles.profile__item}>
              <span className={styles.profile__subtitle}>Логин:</span>
              <span className={styles.profile__info}>{props.login}</span>
            </li>
            <li className={styles.profile__item}>
              <span className={styles.profile__subtitle}>E-mail:</span>
              <span className={styles.profile__info}>{props.email}</span>
            </li>
            <li className={styles.profile__item}>
              <span className={styles.profile__subtitle}>Телефон:</span>
              <span className={styles.profile__info}>{props.phone}</span>
            </li>
          </ul>

          <Link className={styles.profile__btn} to='change-data'>Изменить данные</Link>
          <Link className={styles.profile__btn} to='change-password'>Изменить пароль</Link>
        </div>
      </div>

      {isPopupActive ? <AvatarPopup setPopupActive={setPopupActive}/> : ''}
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
    phone: state.app.user.phone
  }
}

export default connect(mapStateToProps)(Profile)
