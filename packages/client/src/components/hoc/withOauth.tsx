import React, { ComponentType, FC, useEffect } from 'react';
import * as Actions from '../../redux/actions';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector,
} from '../hook/AppUseSelectorAndDispathch';

const withAuth = (Component: ComponentType): FC =>
  (props) => {
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
        dispatch(Actions.signinOAuth(code));
      } else if (isInit) {
        navigate('/login');
      }
    }, [isInit]);
    return <Component {...props} />;
  };

export default withAuth;
