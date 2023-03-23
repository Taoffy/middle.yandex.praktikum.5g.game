import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Canvas } from './Canvas';

import BackButton from '../../../common/BackButton';

import { useGame } from '../../../modules/Game';

import { ROUTES } from '../../../../utils';

import styles from './GameWrapper.module.scss';

import leaderboardAPI from '../../../../api/leaderboardAPI';

import { LeaderboardObject, LeaderboardRequestData } from '../../../../api/leaderboardAPI';
import { useAppSelector } from '../../../hooks/AppUseSelectorAndDispathch';

function GameWrapper() {
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.app.user);

  const { isGameFinished, isTimeOut, score, timeLeft, restartGame } = useGame();

  const data : LeaderboardObject = {
    name: user.login,
    score: score,
    avatar: user.avatar ?? 'https://ya-praktikum.tech/api/v2/resources'+user.avatar
  }

  const res : LeaderboardRequestData = {
    data: data,
    ratingFieldName: 'score',
    teamName: '5g'
  }

  const handleQuitButtonClick = () => {
    navigate(ROUTES.mainPage);
  };

  if (isGameFinished && !isTimeOut) {

    leaderboardAPI.addToLeaderboard(res)
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

          <button
            type="button"
            onClick={handleQuitButtonClick}
            className={styles.endGame__button}>
            Выйти
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

          <button
            type="button"
            onClick={handleQuitButtonClick}
            className={styles.endGame__button}>
            Выйти
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.game}>
      <BackButton to={ROUTES.mainPage} />
      <span className={styles.text}>{timeLeft}</span>
      <div className={styles.game__canvasWrapper}>
        <Canvas />
      </div>
    </div>
  );
}

export { GameWrapper };
