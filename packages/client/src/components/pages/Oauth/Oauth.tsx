import React, { useEffect } from 'react';
import * as Actions from '../../../redux/actions';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector,
} from '../../hooks/AppUseSelectorAndDispathch';
import { Spinner } from '../../ui/spinner/spinner';

function Oauth() {
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
  }, [isAuth, navigate]);
  useEffect(() => {
    const code = searchParams.get('code');
    if (code && !isAuth) {
      dispatch(Actions.signinOAuth(code));
    } else if (isInit) {
      navigate('/login');
    }
  }, [dispatch, isAuth, isInit, navigate, searchParams]);
  return (
    <main>
      <Spinner />
    </main>
  );
}

export { Oauth };
