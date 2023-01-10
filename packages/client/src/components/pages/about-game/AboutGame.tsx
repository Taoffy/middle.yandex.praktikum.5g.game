import React from 'react'
import styles from './AboutGame.module.css'

function AboutGame() {
  return (
    <div className={styles.aboutGame}>
      <div className={styles.info}>
        <p className={styles.info__text}>
          Прокачай свой мозг
          <br />
          и опереди соперников
          <br />в жаркой битве памяти
        </p>
        <h1 className={styles.title}>
          <span className={styles.title__up}>MEMORY</span>
          <span className={styles.title__grad}>GAME</span>
        </h1>
      </div>
      <div className={styles.main}>
        <div></div>
        <div className={styles.main__buttonsWrap}>
          <div className={styles.main__buttons}>
            <a className={styles.main__link} href="./main">
              Начать игру
            </a>
            <button className={styles.main__btn}>Правила игры</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { AboutGame }
