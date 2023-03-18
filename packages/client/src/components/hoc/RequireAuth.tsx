/* eslint-disable react/display-name */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/AppUseSelectorAndDispathch';

function RequireAuth({ children }: { children: JSX.Element }) {
  const location = useLocation();

  const isAuth = useAppSelector((state) => state.app.isAuth);

  if (isAuth) {
    return children;
  }

  return (
    <Navigate
      to={{
        pathname: '/login',
      }}
      state={{ from: location }}
    />
  );
}

export default RequireAuth;
