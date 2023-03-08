import React from 'react';

import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils';

import { useAppDispatch } from '../../hooks/AppUseSelectorAndDispathch';
import * as Actions from '../../../redux/actions';

import styles from './Header.module.scss';

function Header({ isPositionFixed = false }: { isPositionFixed?: boolean }) {
  const dispatch = useAppDispatch();

  const handleLogoutLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    dispatch(Actions.logout());
  };

  return (
    <header
      className={`${styles.header} ${
        isPositionFixed ? styles.header__fixed : ''
      }`}>
      <Link className={styles.link} to={ROUTES.mainPage}>
        Главная
      </Link>
      <div>
        <Link className={styles.link} to={ROUTES.profile}>
          Профиль
        </Link>
        <Link className={styles.link} to={ROUTES.leaderboard}>
          Лидеры
        </Link>
        <Link className={styles.link} to={ROUTES.forum}>
          Форум
        </Link>
        <a href="#" className={styles.link} onClick={handleLogoutLinkClick}>
          Выйти
        </a>
      </div>
    </header>
  );
}

export default Header;
