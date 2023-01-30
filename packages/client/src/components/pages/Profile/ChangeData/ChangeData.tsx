import React, { useRef } from 'react'
import { connect, useDispatch } from 'react-redux'

import styles from './ChangeData.module.scss'
import { UserData } from '../../../../redux/types'
import * as Actions from '../../../../redux/actions';

interface ChangeDataProps {
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string,
}

function ChangeData(props: ChangeDataProps) {
  const dispatch = useDispatch();
  const formEl = useRef(null);

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
    }

    dispatch(Actions.changeUserData(data));
  };

  return (
    <div className={styles.data__container}>
      <h1 className={styles.data__header}>Изменить данные</h1>
      <form id='change-data' onSubmit={onDataSubmit} ref={formEl} >
        <input className={styles.data__input} type='text' placeholder={props.first_name} name='first_name' />
        <input className={styles.data__input} type='text' placeholder={props.second_name} name='second_name' />
        <input className={styles.data__input} type='text' placeholder={props.login} name='login' />
        <input className={styles.data__input} type='email' placeholder={props.email} name='email' />
        <input className={styles.data__input} type='tel' placeholder={props.phone} name='phone' />

        <button className={styles.data__btn} type='submit'>Сохранить</button>
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
