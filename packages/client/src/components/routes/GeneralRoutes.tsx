import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { RequireAuth, UnauthorizedOnly } from '../hoc';

import { LoginPage } from '../pages/login/Login';
import { AboutGame } from '../pages/about-game/AboutGame';
import { SignUpPage } from '../pages/sign-up/SignUp';
import { ForumPage } from '../pages/forum/Forum';
import { ForumPostPage } from '../pages/forumPost/ForumPost';
import { LeaderboardPage } from '../pages/leaderboard/Leaderboard';
import { GamePage } from '../pages/gamePage/GamePage';
import Profile from '../pages/Profile/Profile';
import ChangeData from '../pages/Profile/ChangeData/ChangeData';
import ChangePassword from '../pages/Profile/ChangePassword/ChangePassword';
import { Oauth } from '../pages/Oauth/Oauth';

const GeneralRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Oauth />} />
        <Route
          path="login"
          element={
            <UnauthorizedOnly>
              <LoginPage />
            </UnauthorizedOnly>
          }
        />
        <Route
          path="sign-up"
          element={
            <UnauthorizedOnly>
              <SignUpPage />
            </UnauthorizedOnly>
          }
        />
        <Route
          path="about-game"
          element={
            <RequireAuth>
              <AboutGame />
            </RequireAuth>
          }
        />
        <Route
          path="game"
          element={
            <RequireAuth>
              <GamePage />
            </RequireAuth>
          }
        />
        <Route
          path="forum"
          element={
            <RequireAuth>
              <ForumPage />
            </RequireAuth>
          }
        />
        <Route
          path="leaderboard"
          element={
            <RequireAuth>
              <LeaderboardPage />
            </RequireAuth>
          }
        />
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="profile/change-data"
          element={
            <RequireAuth>
              <ChangeData />
            </RequireAuth>
          }
        />
        <Route
          path="profile/change-password"
          element={
            <RequireAuth>
              <ChangePassword />
            </RequireAuth>
          }
        />
        <Route
          path="forumpost"
          element={
            <RequireAuth>
              <ForumPostPage />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
};

export { GeneralRoutes };
