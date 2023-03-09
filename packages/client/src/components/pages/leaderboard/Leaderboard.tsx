import React from 'react';
import Leaderboard from '../../../api/leaderboardAPI';

import styles from './Leaderboard.module.scss';

function LeaderboardPage() {
  const leaders = Leaderboard.getLeaderboard({
    ratingFieldName: "score",
    cursor: 0,
    limit: 5
  })

  // const leaders = [{
  //   name: "Новый",
  //   score: 15000,
  //   place: 1,
  //   avatar: 'path/to/avatar.jpg'
  // }] пример вывода

  return (
    <main className={styles.leaderboard}>
      <div className={styles.centeredBox}>
        <div className={styles.centeredBox__inner}>
          <h1 className={styles.liders__title}>Лидеры игры</h1>
          <div className={styles.liders__wrapper}>
            {
              leaders.map((value, _)=>{
                return (
                  <div className={styles.liders__item}>
                    <img className={styles.liders__img} src={"#"+value.avatar} />
                    <span className={styles.liders__name}>{value.name}</span>
                    <span className={styles.liders__score}>{value.score}</span>
                    <span className={styles.liders__place}>{value.place}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </main>
  );
}

export { LeaderboardPage };
