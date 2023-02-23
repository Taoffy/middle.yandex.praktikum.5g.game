import React, { ComponentType, FC } from 'react';
import { useAppSelector } from '../hook/AppUseSelectorAndDispathch';
import { LoginPage } from '../pages/login/Login';
import { Spinner } from '../ui/spinner/spinner';

const withAuth =
  (Component: ComponentType): FC =>
  (props) => {
    const isAuth = useAppSelector(({ app }) => app.isAuth);
    const isInit = useAppSelector(({ app }) => app.init);
    if (!isInit) {
      return <Spinner {...props} />;
    }
    if (isAuth) {
      return <Component {...props} />;
    }
    return <LoginPage />;
  };

export default withAuth;
