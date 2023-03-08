import React from 'react';
import styles from './spinner.module.scss';
function Spinner() {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner__animation}></div>
    </div>
  );
}

export { Spinner };
