import React, { Dispatch, FormEvent, MutableRefObject, SetStateAction, useRef } from 'react'
import styles from './AvatarPopup.module.scss'
import { useDispatch } from 'react-redux'
import * as Actions from '../../redux/actions'

interface AvatarPopupProps {
  setPopupActive: Dispatch<SetStateAction<boolean>>,
}

function AvatarPopup({setPopupActive}: AvatarPopupProps) {
  const avatarForm = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();

  const handleAvatarChange = (e: FormEvent) => {
    e.preventDefault();

    if (avatarForm.current) {
      const formData = new FormData(avatarForm?.current);
      const file = formData.get('file');
      dispatch(Actions.changeUserAvatar(file));
    }
  }

  return(
    <div className={styles.popup__wrapper} onClick={() => setPopupActive(false)}>
        <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
          <h1 className={styles.popup__header}>Загрузить аватар</h1>
          <form className={styles.popup__form} ref={avatarForm} onSubmit={handleAvatarChange}>
            <label htmlFor='avatar-file' className={styles.popup__file} />
            <input id='avatar-file' type='file' name='file' />

            <button type="submit" className={styles.popup__btn}>Сохранить</button>
          </form>
        </div>
    </div>
  );
}

export { AvatarPopup }
