import React, { useEffect } from 'react';
import styles from './loader.module.scss';
import * as Actions from '../../../redux/actions';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector,
} from '../../hook/AppUseSelectorAndDispathch';
function Loader() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isAuth = useAppSelector(({ app }) => app.isAuth);
  const isInit = useAppSelector(({ app }) => app.init);
  useEffect(() => {
    if (isAuth) {
      navigate('/main');
      return;
    }
  }, [isAuth]);
  useEffect(() => {
    const code = searchParams.get('code');
    if (code && !isAuth) {
      dispatch(
        Actions.signinOAuth({
          redirect_uri: 'http://localhost:3000',
          code,
        })
      );
    } else if (isInit) {
      navigate('/login');
    }
  }, [isInit]);
  return (
    <div className={styles.loader}>
      <div className={styles.spinner__animation}></div>
    </div>
  );
}

export { Loader };
