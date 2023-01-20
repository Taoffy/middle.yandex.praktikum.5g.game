import React from 'react'
import styles from './SignUp.module.scss'

function SignUpPage() {
  return (
    <div className={styles.registration__container}>
      <h1 className={styles.registration__title}>Регистрация</h1>

      <form className={styles.registration__form} action=''>
        <input className={styles.registration__item} type='text' placeholder='Имя'/>
        <input className={styles.registration__item} type='text' placeholder='Фамилия'/>
        <input className={styles.registration__item} type='text' placeholder='Логин'/>
        <input className={styles.registration__item} type='text' placeholder='E-mail'/>
        <input className={styles.registration__item} type='text' placeholder='Телефон'/>

        <button className={styles.registration__btn} type='submit'>Зарегистрироваться</button>
      </form>

      <a className={styles.registration__login} href='/login'>Войти</a>
    </div>
  )
}

export { SignUpPage };
