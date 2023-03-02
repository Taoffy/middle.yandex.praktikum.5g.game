import React, { Dispatch, FormEvent, SetStateAction, useRef } from 'react';
import styles from './AvatarPopup.module.scss';
import * as Actions from '../../redux/actions';
import { useAppDispatch } from '../hooks/AppUseSelectorAndDispathch';

interface AvatarPopupProps {
  setPopupActive: Dispatch<SetStateAction<boolean>>;
}

function AvatarPopup({ setPopupActive }: AvatarPopupProps) {
  const avatarForm = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();

  const handleAvatarChange = (e: FormEvent) => {
    e.preventDefault();

    if (avatarForm.current) {
      const avatar = new FormData(avatarForm?.current).get('file') as
        | string
        | Blob;
      const formData = new FormData(); // Как это типизировать? Как вообще понять как типизировать такие штуки?
      formData.append('avatar', avatar);
      dispatch(Actions.changeUserAvatar(formData));
    }
  };

  return (
    <div
      className={styles.popup__wrapper}
      onClick={() => setPopupActive(false)}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <h1 className={styles.popup__header}>Загрузить аватар</h1>
        <form
          className={styles.popup__form}
          method="put"
          ref={avatarForm}
          onSubmit={handleAvatarChange}>
          <label htmlFor="avatar-file" className={styles.popup__file} />
          <input id="avatar-file" type="file" name="file" />

          <button type="submit" className={styles.popup__btn}>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export { AvatarPopup };
