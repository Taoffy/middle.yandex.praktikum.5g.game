import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../pages/login/Login';
import { MainPage } from '../pages/main/Main';
import { AboutGame } from '../pages/about-game/AboutGame';
import { SignUpPage } from '../pages/sign-up/SignUp';
import { ForumPage } from '../pages/forum/Forum';
import { ForumPostPage } from '../pages/forumPost/ForumPost';
import { LeaderboardPage } from '../pages/leaderboard/Leaderboard';
import { Profile } from '../pages/Profile/Profile';
import withAuth from '../hoc/withAuth';

const GeneralRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="main" element={withAuth(MainPage)({})} />
        <Route path="about-game" element={withAuth(AboutGame)({})} />
        <Route path="forum" element={withAuth(ForumPage)({})} />
        <Route path="forumpost" element={withAuth(ForumPostPage)({})} />
        <Route path="leaderboard" element={withAuth(LeaderboardPage)({})} />
        <Route path="profile" element={withAuth(Profile)({})} />
      </Route>
    </Routes>
  );
};

export { GeneralRoutes };
