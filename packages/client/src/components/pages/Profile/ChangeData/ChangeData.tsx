import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './ChangeData.module.scss'

interface ChangeDataProps {
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string,
}

function ChangeData(props: ChangeDataProps) {
  return (
    <div className={styles.data__container}>
      <h1 className={styles.data__header}>Изменить данные</h1>
      <form id='change-data'>
        <input className={styles.data__input} type='text' placeholder={props.first_name} />
        <input className={styles.data__input} type='text' placeholder={props.second_name} />
        <input className={styles.data__input} type='text' placeholder={props.login} />
        <input className={styles.data__input} type='email' placeholder={props.email} />
        <input className={styles.data__input} type='tel' placeholder={props.phone} />

        <Link className={styles.data__btn} to='/profile'>Сохранить</Link>
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
  }
}

export default connect(mapStateToProps)(ChangeData);
