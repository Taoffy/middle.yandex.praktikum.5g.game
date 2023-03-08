import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { Store } from '../../redux/types';
import { useAppSelector } from '../hooks/AppUseSelectorAndDispathch';

function UnauthorizedOnly({ children }: { children: JSX.Element }) {
  const isAuth = useAppSelector((state: Store) => state.app.isAuth);
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/about-game';

  if (isAuth) {
    return <Navigate to={fromPage} />;
  }

  return children;
}

export default UnauthorizedOnly;
