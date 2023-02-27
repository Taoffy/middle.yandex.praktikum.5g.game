import React, { ComponentType, FC } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../redux/types';
import { Navigate } from 'react-router-dom';

const withAuth =
  (Component: ComponentType): FC =>
  (props) => {
    const isAuth = useSelector((state: State) => state.isAuth);
    if (isAuth) {
      return <Component {...props} />;
    }
    return (
      <Navigate
        to={{
          pathname: '/login',
        }}
      />
    );
  };

export default withAuth;
