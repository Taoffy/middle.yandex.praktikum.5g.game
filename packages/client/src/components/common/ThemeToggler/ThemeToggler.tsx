import React, { useEffect, useState } from 'react';
import styles from './ThemeToggler.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/AppUseSelectorAndDispathch';
import { setUserTheme } from '../../../redux/actions';

function ThemeSwitcher() {
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const mainTheme = useAppSelector((state) => {
    if (state.app.user.theme) {
      return state.app.user.theme;
    }

    return 'dark';
  });
  const themeElement = document.getElementById('root');
  const toggleChecked = () => {
    setIsChecked((isChecked) => !isChecked);
  }

  const handleThemeClass = () => {
    if (isChecked) {
      themeElement!.classList.remove('dark');
      themeElement!.classList.add('light');
    } else {
      themeElement!.classList.remove('light');
      themeElement!.classList.add('dark');
    }
  }

  useEffect(() => {
    const theme = isChecked ? 'light' : 'dark';
    handleThemeClass();

    dispatch(setUserTheme(theme));
  }, [isChecked])

  return (
    <div className={styles.wrapper}>
      <input type='checkbox' id={styles.hide_checkbox} onClick={() => toggleChecked()}/>
      <label htmlFor={styles.hide_checkbox} className={styles.toggle}>
        <span className={styles.toggle_button}>
          <span className={`${styles.crater} ${styles.crater_one}`} />
          <span className={`${styles.crater} ${styles.crater_two}`} />
          <span className={`${styles.crater} ${styles.crater_three}`} />
          <span className={`${styles.crater} ${styles.crater_four}`} />
          <span className={`${styles.crater} ${styles.crater_five}`} />
          <span className={`${styles.crater} ${styles.crater_six}`} />
          <span className={`${styles.crater} ${styles.crater_seven}`} />
        </span>
        <span className={`${styles.star} ${styles.star_one}`} />
        <span className={`${styles.star} ${styles.star_two}`} />
        <span className={`${styles.star} ${styles.star_three}`} />
        <span className={`${styles.star} ${styles.star_four}`} />
        <span className={`${styles.star} ${styles.star_five}`} />
        <span className={`${styles.star} ${styles.star_six}`} />
        <span className={`${styles.star} ${styles.star_seven}`} />
        <span className={`${styles.star} ${styles.star_eight}`} />
      </label>
    </div>
  );
}

export default ThemeSwitcher;
