import React, { FormEvent, useEffect } from 'react';
import styles from './forum.module.scss';
import MessageIcon from '../../../img/MessageIcon.svg';
import {
  useAppDispatch,
  useAppSelector,
} from '../../hooks/AppUseSelectorAndDispathch';
import * as Actions from '../../../redux/forum/actions';
import * as ActionsUser from '../../../redux/actions';
import { v1 as uuidv1 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../utils';
import Header from '../../common/Header';

function ForumPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleQuitButtonClick = (id: string) => {
    navigate(`${ROUTES.forumpost}/${id}`);
  };
  const topics = useAppSelector((state) => state.forum.topics);
  const user = useAppSelector((state) => state.app.user);
  useEffect(() => {
    dispatch(ActionsUser.setUserExpress(user));
    // dispatch(Actions.getTopics());
  }, [dispatch, user]);
  const [openForm, setOpenForm] = React.useState(false);
  const [form, setForm] = React.useState<Form>({
    title: {
      value: '',
      type: 'text',
      placeholder: 'Тема',
    },
    description: {
      value: '',
      type: 'text',
      placeholder: 'Описание',
    },
  });
  const getFormValues = () => {
    return {
      id: uuidv1(),
      title: form.title.value,
      description: form.description.value,
      id_author: `${user.id}`,
      date: new Date().toISOString().slice(0, 10),
      views: 0,
    };
  };
  const handleInputChange = (key: string, value: string) => {
    setForm({
      ...form,
      [key]: { ...form[key], value },
    } as Form);
  };
  const sendData = (event: FormEvent) => {
    event.preventDefault();
    dispatch(Actions.addTopic(getFormValues()));
  };
  const topicItems = Object.values(topics).map((topic) => (
    <div
      onClick={() => handleQuitButtonClick(topic.id)}
      key={topic.id}
      className={styles.centeredBox__inner__theme}>
      <h2>{topic.title}</h2>
      <span>{topic.description}</span>
      <br />
      <div className={styles.centeredBox__messageBlock}>
        <img src={MessageIcon} alt="MessageIcon" />
        <span>{topic.views}</span>
      </div>
    </div>
  ));
  return (
    <main className={styles.forum}>
      <Header />
      <div className={styles.centeredBox}>
        <div className={styles.centeredBox__inner}>
          <div className={styles.centeredBox__inner__header}>
            <h1 className={styles.forum__title}>Обсуждение игры</h1>
            {!openForm && (
              <button
                onClick={() => setOpenForm(true)}
                className={styles.form__btnSubmit}>
                Создать новую тему
              </button>
            )}
          </div>
          {openForm && (
            <form className={styles.form__wrapper} onSubmit={sendData}>
              {Object.entries(form).map(([key, item]) => (
                <div className={styles.inputBox} key={key}>
                  <input
                    className={styles.input}
                    value={form[key].value}
                    name={key}
                    type={item.type}
                    placeholder={item.placeholder}
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                      handleInputChange(key, e.currentTarget.value)
                    }
                  />
                </div>
              ))}
              <button className={styles.form__btnSubmit} type="submit">
                создать
              </button>
              <button
                className={styles.form__btnSubmit}
                onClick={() => setOpenForm(false)}>
                Закрыть
              </button>
            </form>
          )}
          <div className={styles.contentBlock}>{topicItems}</div>
        </div>
      </div>
    </main>
  );
}

export { ForumPage };
