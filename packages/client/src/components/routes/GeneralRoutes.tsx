import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../pages/login/Login';
import { MainPage } from '../pages/main/Main';
import { AboutGame } from '../pages/about-game/AboutGame';
import { SignUpPage } from '../pages/sign-up/SignUp';
import { ForumPage } from '../pages/forum/Forum';
import { LeaderboardPage } from '../pages/leaderboard/Leaderboard';
import Profile from '../pages/Profile/Profile'
import ChangeData from '../pages/Profile/ChangeData/ChangeData'
import ChangePassword from '../pages/Profile/ChangePassword/ChangePassword'


const GeneralRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="login" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="about-game" element={<AboutGame />} />
        <Route path="forum" element={<ForumPage />} />
        <Route path="leaderboard" element={<LeaderboardPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/change-data" element={<ChangeData />} />
        <Route path="profile/change-password" element={<ChangePassword />} />
      </Route>
    </Routes>
  );
};

export { GeneralRoutes };
