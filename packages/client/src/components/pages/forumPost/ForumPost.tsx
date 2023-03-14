import React, { useEffect, useState } from 'react';
import styles from './forumPost.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector,
} from '../../hooks/AppUseSelectorAndDispathch';
import * as Actions from '../../../redux/forum/actions';
import { v1 as uuidv1 } from 'uuid';

function ForumPostPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [input, setInput] = useState('');
  const { id } = useParams();
  if (!id) {
    navigate(-1);
  } else {
    // dispatch(Actions.getComments(id));
  }
  const topic = useAppSelector((state) => state.forum.topics[id || '']);
  const comments = useAppSelector((state) => state.forum.comments[id || '']);
  const user = useAppSelector((state) => state.app.user);

  const createComment = () => {
    return {
      id: uuidv1(),
      likes: 0,
      id_topic: topic.id,
      text: input,
      author: user.login,
      id_author: `${user.id}`,
      date: new Date().toISOString().slice(0, 10),
    };
  };
  const handleButton = () => {
    dispatch(Actions.addComment(createComment()));
  };
  return (
    <main className={styles.forum}>
      <div className={styles.centeredBox}>
        <div className={styles.centeredBox__inner}>
          <h1 className={styles.forum__title}>{topic.title}</h1>
          <div className={styles.contentBlock}>
            <div className={styles.centeredBox__inner__theme}>
              <div className={styles.centeredBox__inner__theme__header}>
                <h3 className={styles.forum__title}>{topic.author}</h3>
                <span className={styles.date}>{topic.date}</span>
              </div>
              <span>{topic.description}</span>
              <br></br>
            </div>
            {comments && Object.values(comments).length ? (
              Object.values(comments).map((comment) => (
                <div
                  key={comment.id}
                  className={styles.centeredBox__inner__theme__comment}>
                  <div className={styles.centeredBox__inner__theme__header}>
                    <h3 className={styles.forum__title}>{comment.author}</h3>
                    <span className={styles.date}>{comment.date}</span>
                  </div>
                  <span>{comment.text}</span>
                  <br></br>
                </div>
              ))
            ) : (
              <div>Комментариев нету</div>
            )}
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              className={styles.input}
              placeholder="Сообщение"
              value={input}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setInput(e.currentTarget.value)
              }
            />
            <button onClick={handleButton} className={styles.form__btnSubmit}>
              Отправить сообщение
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export { ForumPostPage };
