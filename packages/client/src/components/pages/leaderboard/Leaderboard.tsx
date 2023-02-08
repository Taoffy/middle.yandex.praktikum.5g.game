import React from 'react';

import styles from './Leaderboard.module.scss';

function LeaderboardPage() {
  return (
    <main className={styles.leaderboard}>
      <div className={styles.centeredBox}>
        <div className={styles.centeredBox__inner}>
          <h1 className={styles.liders__title}>Лидеры игры</h1>
          <div className={styles.liders__wrapper}>
            <div className={styles.liders__item}>
              <img className={styles.liders__img} src="#" />
              <span className={styles.liders__name}>NickName</span>
              <span className={styles.liders__score}>56806</span>
              <span className={styles.liders__place}>1</span>
            </div>
            <div className={styles.liders__item}>
              <img className={styles.liders__img} src="#" />
              <span className={styles.liders__name}>NickName</span>
              <span className={styles.liders__score}>56806</span>
              <span className={styles.liders__place}>1</span>
            </div>
            <div className={styles.liders__item}>
              <img className={styles.liders__img} src="#" />
              <span className={styles.liders__name}>NickName</span>
              <span className={styles.liders__score}>56806</span>
              <span className={styles.liders__place}>1</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export { LeaderboardPage };
