import React from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './BackButton.module.scss';

function BackButton({ to = '' }: { to?: string }) {
  const navigate = useNavigate();

  const handleClick = () => {
    to ? navigate(to) : navigate(-1);
  };

  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      Назад
    </button>
  );
}

export default BackButton;
