import React from 'react';

import { TGameContext } from './types';

const GameContext = React.createContext<TGameContext>({
  isGameInitial: false,
  isGameFinished: false,
  isTimeOut: false,
  timeLeft: '',
  score: 0,
});

export default GameContext;
