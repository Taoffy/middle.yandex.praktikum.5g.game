import React, { Dispatch, SetStateAction } from 'react';
import styles from './AvatarPopup.module.scss';

interface AvatarPopupProps {
  setPopupActive: Dispatch<SetStateAction<boolean>>;
}

function AvatarPopup({ setPopupActive }: AvatarPopupProps) {
  return (
    <div
      className={styles.popup__wrapper}
      onClick={() => setPopupActive(false)}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <h1 className={styles.popup__header}>Загрузить аватар</h1>
        <form className={styles.popup__form}>
          <label htmlFor="avatar-file" className={styles.popup__file} />
          <input id="avatar-file" type="file" name="file" />

          <button className={styles.popup__btn}>Сохранить</button>
        </form>
      </div>
    </div>
  );
}

export { AvatarPopup };
