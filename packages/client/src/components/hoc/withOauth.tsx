import React, { ComponentType, FC, useEffect } from 'react';
import * as Actions from '../../redux/actions';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector,
} from '../hook/AppUseSelectorAndDispathch';

const withOauth = (Component: ComponentType): FC => {
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
  const hoc = (props: any) => {
    return <Component {...props} />;
  };
  return hoc;
};
export default withOauth;
