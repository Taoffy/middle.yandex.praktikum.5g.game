/* eslint-disable react/display-name */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector,
} from '../hooks/AppUseSelectorAndDispathch';
import * as Actions from '../../redux/actions';

function RequireAuth({ children }: { children: JSX.Element }) {
  const location = useLocation();

  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.app.isAuth);
  const user = useAppSelector((state) => state.app.user);

  if (isAuth) {
    dispatch(Actions.setUserExpress(user));
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
