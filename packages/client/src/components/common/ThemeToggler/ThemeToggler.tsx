import React, { useState, useEffect } from 'react';
import styles from './ThemeToggler.module.scss';
import {
  useAppDispatch,
  useAppSelector,
} from '../../hooks/AppUseSelectorAndDispathch';
import { setUserTheme } from '../../../redux/actions';

function handleThemeClass(isChecked: boolean) {
  const rootElement = document.getElementById('root');

  if (isChecked) {
    rootElement!.classList.remove('dark');
    rootElement!.classList.add('light');
  } else {
    rootElement!.classList.remove('light');
    rootElement!.classList.add('dark');
  }
}

function ThemeSwitcher() {
  const dispatch = useAppDispatch();

  const [isChecked, setIsChecked] = useState(true);

  const user = useAppSelector((state) => state.app.user);

  const handleInputChange = () => {
    setIsChecked(!isChecked);

    handleThemeClass(!isChecked);

    const theme = !isChecked ? 'light' : 'dark';
    dispatch(setUserTheme(user.id, theme));
  };

  useEffect(() => {
    if (user.theme === 'dark') {
      setIsChecked(true);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        id={styles.hide_checkbox}
        onChange={handleInputChange}
        checked={isChecked}
      />
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
