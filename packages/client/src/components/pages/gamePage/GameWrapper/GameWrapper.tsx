import React from 'react';

import { Canvas } from './Canvas';

import { useGame } from '../../../modules/Game';

import styles from './GameWrapper.module.scss';

function GameWrapper() {
  const { isGameFinished, isTimeOut, score, timeLeft, restartGame } = useGame();

  if (isGameFinished && !isTimeOut) {
    return (
      <div className={styles.game}>
        <div className={styles.endGame}>
          <div className={styles.endGame__textWrapper}>
            <span className={styles.text}>Поздравляем, ваш счет:</span>
            &nbsp;
            <span className={styles.text}>{score}</span>
          </div>
          <button
            type="button"
            onClick={restartGame}
            className={styles.endGame__button}>
            Сыграть еще?
          </button>
        </div>
      </div>
    );
  }

  if (isGameFinished && isTimeOut) {
    return (
      <div className={styles.game}>
        <div className={styles.endGame}>
          <div className={styles.endGame__textWrapper}>
            <span className={styles.text}>К сожалению, время вышло</span>
          </div>
          <button
            type="button"
            onClick={restartGame}
            className={styles.endGame__button}>
            Сыграть еще?
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.game}>
      <span className={styles.text}>{timeLeft}</span>
      <div className={styles.game__canvasWrapper}>
        <Canvas />
      </div>
    </div>
  );
}

export { GameWrapper };
