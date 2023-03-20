import React, { useState } from 'react';
import leaderboardAPI from '../../../api/leaderboardAPI';
import svg from '../../../../public/vite.svg'
import styles from './Leaderboard.module.scss';
import { LeaderboardResultData } from '../../../api/leaderboardAPI';

function LeaderboardPage() {
  const [leaders, setLeaders] = useState<LeaderboardResultData>()
  useState(() => {
    leaderboardAPI.getLeaderboard().then((x) => {
      setLeaders(x)
    })
  })
  return (
    <main className={styles.leaderboard}>
      <div className={styles.centeredBox}>
        <div className={styles.centeredBox__inner}>
          <h1 className={styles.liders__title}>Лидеры игры</h1>
          {
            // leaders.map((value, key) => {
            //   return (
            //     <div className={styles.liders__wrapper}>
            //       <div className={styles.liders__item}>
            //         <img className={styles.liders__img} src={svg} />
            //         <span className={styles.liders__name}>{value.data.name}</span>
            //         <span className={styles.liders__score}>{value.data.score}</span>
            //         <span className={styles.liders__place}>{key + 1}</span>
            //       </div>
            //     </div>
            //   )
            // })
          }
        </div>
      </div>
    </main>
  );
}

export { LeaderboardPage };
