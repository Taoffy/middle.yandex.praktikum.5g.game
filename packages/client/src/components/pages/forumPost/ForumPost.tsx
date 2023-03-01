import React from 'react';
import styles from './forumPost.module.scss';

function ForumPostPage() {
  return (
    <main className={styles.forum}>
      <div className={styles.centeredBox}>
        <div className={styles.centeredBox__inner}>
          <h1 className={styles.forum__title}>Заголовок темы</h1>
          <div className={styles.contentBlock}>
            <div className={styles.centeredBox__inner__theme}>
              <div className={styles.centeredBox__inner__theme__header}>
                <h3 className={styles.forum__title}>Имя человека</h3>
                <span className={styles.date}>
                  {new Date().toISOString().slice(0, 10)}
                </span>
              </div>
              <span>Описание вопроса</span>
              <br></br>
            </div>
            <div className={styles.centeredBox__inner__theme__comment}>
              <div className={styles.centeredBox__inner__theme__header}>
                <h3 className={styles.forum__title}>Имя человека</h3>
                <span className={styles.date}>
                  {new Date().toISOString().slice(0, 10)}
                </span>
              </div>
              <span>Комментарий</span>
              <br></br>
            </div>
            <div className={styles.centeredBox__inner__theme__comment}>
              <div className={styles.centeredBox__inner__theme__header}>
                <h3 className={styles.forum__title}>Имя человека</h3>
                <span className={styles.date}>
                  {new Date().toISOString().slice(0, 10)}
                </span>
              </div>
              <span>Комментарий</span>
              <br></br>
            </div>
            <div className={styles.centeredBox__inner__theme__comment}>
              <div className={styles.centeredBox__inner__theme__header}>
                <h3 className={styles.forum__title}>Имя человека</h3>
                <span className={styles.date}>
                  {new Date().toISOString().slice(0, 10)}
                </span>
              </div>
              <span>Ответ</span>
              <br></br>
            </div>
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              className={styles.input}
              placeholder="Сообщение"
            />
            <button className={styles.form__btnSubmit}>
              Отправить сообщение
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export { ForumPostPage };
