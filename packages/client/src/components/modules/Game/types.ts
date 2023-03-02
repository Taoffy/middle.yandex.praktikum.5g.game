import { ReactNode, RefObject } from 'react';
import { Game } from '../../../modules/Game';

export type TGameProvider = {
  children: ReactNode;
};

export type TGameContext = {
  isGameInitial: boolean;
  isGameFinished: boolean;
  isTimeOut: boolean;
  game?: RefObject<Game>;
  timeLeft: string;
  score: number;
};
