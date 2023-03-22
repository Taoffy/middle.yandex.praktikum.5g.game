import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils';

import Header from '../../common/Header';

import styles from './AboutGame.module.scss';
import RulesModal from '../../common/RulesModal/RulesModal';

function AboutGame() {
  const [rulesModalActive, setRulesModalActive] = useState(true);

  return (
    <div className={styles.aboutGame}>
      <Header />
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
            <Link className={styles.main__link} to={ROUTES.game}>
              Начать игру
            </Link>
            <button className={styles.main__btn} onClick={() => setRulesModalActive(true)}>Правила игры</button>
          </div>
        </div>
      </div>
      <RulesModal active={rulesModalActive} setActive={setRulesModalActive}>
          <p>Мемо — полезная игра с простыми правилами. Игра состоит из карточек с парными изображениями, которые нужно переворачивать и запоминать, находя пару. Это игра, безусловно, расширяет кругозор, развивает внимание, тренирует память.</p>
      </RulesModal>
    </div>
  );
}

export { AboutGame };
