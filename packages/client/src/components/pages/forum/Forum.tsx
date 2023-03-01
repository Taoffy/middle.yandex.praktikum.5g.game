import React from 'react';
import styles from './forum.module.scss';
import MessageIcon from '../../../img/MessageIcon.svg';

function ForumPage() {
  return (
    <main className={styles.forum}>
      <div className={styles.centeredBox}>
        <div className={styles.centeredBox__inner}>
          <div className={styles.centeredBox__inner__header}>
            <h1 className={styles.forum__title}>Обсуждение игры</h1>
            <button className={styles.form__btnSubmit}>
              Создать новую тему
            </button>
          </div>
          <div className={styles.contentBlock}>
            <div className={styles.centeredBox__inner__theme}>
              <h2>Тема 1</h2>
              <span>Описание</span>
              <br />
              <div className={styles.centeredBox__messageBlock}>
                <img src={MessageIcon} alt="MessageIcon" />
                <span>27</span>
              </div>
            </div>
            <div className={styles.centeredBox__inner__theme}>
              <h2>Тема 2</h2>
              <span>Описание</span>
              <br />
              <div className={styles.centeredBox__messageBlock}>
                <img src={MessageIcon} alt="MessageIcon" />
                <span>27</span>
              </div>
            </div>
            <div className={styles.centeredBox__inner__theme}>
              <h2>Тема 3</h2>
              <span>Описание</span>
              <br />
              <div className={styles.centeredBox__messageBlock}>
                <img src={MessageIcon} alt="MessageIcon" />
                <span>27</span>
              </div>
            </div>
            <div className={styles.centeredBox__inner__theme}>
              <h2>Тема 4</h2>
              <span>Описание</span>
              <br />
              <div className={styles.centeredBox__messageBlock}>
                <img src={MessageIcon} alt="MessageIcon" />
                <span>27</span>
              </div>
            </div>
            <div className={styles.centeredBox__inner__theme}>
              <h2>Тема 5</h2>
              <span>Описание</span>
              <br />
              <div className={styles.centeredBox__messageBlock}>
                <img src={MessageIcon} alt="MessageIcon" />
                <span>27</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export { ForumPage };
