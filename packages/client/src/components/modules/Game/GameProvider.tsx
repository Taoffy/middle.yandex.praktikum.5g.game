import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import GameContext from './GameContext';

import { Game, EVENTS_LIST } from '../../../modules/Game';

import { countdownTimeToString } from './utils';

import { TGameProvider } from './types';

function GameProvider({ children }: TGameProvider) {
  const gameRef = useRef<Game | null>(null);

  const [isInitial, setIsInitial] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isTimeOut, setIsTimeOut] = useState(false);
  const [timeLeft, setTimeLeft] = useState('02:00');
  const [score, setScore] = useState(120);

  const handleIsGameFinishedChange = useCallback(
    (data: { isGameFinished: boolean }) => {
      setIsGameFinished(data.isGameFinished);
    },
    []
  );

  const handleTimeLeftChange = useCallback((data: { timeLeft: number }) => {
    const resultTime = countdownTimeToString(data.timeLeft);
    setTimeLeft(resultTime);
    setScore(data.timeLeft);
  }, []);

  const handleIsTimeOutChange = useCallback((data: { isTimeOut: boolean }) => {
    setIsTimeOut(data.isTimeOut);
  }, []);

  const handleGameRestart = useCallback(() => {
    setTimeLeft('02:00');
  }, []);

  useEffect(() => {
    if (isInitial) {
      return;
    }

    gameRef.current = new Game();
    setIsInitial(true);
  }, [isInitial]);

  useEffect(() => {
    if (!isInitial || !gameRef.current) {
      return;
    }

    gameRef.current.on(
      EVENTS_LIST.isGameFinishedFlagChanged,
      handleIsGameFinishedChange
    );
    gameRef.current.on(EVENTS_LIST.timeLeftChanged, handleTimeLeftChange);
    gameRef.current.on(EVENTS_LIST.isTimeOut, handleIsTimeOutChange);
    gameRef.current.on(EVENTS_LIST.gameRestarted, handleGameRestart);

    return function cleanUp() {
      (gameRef.current as Game).off(
        EVENTS_LIST.isGameFinishedFlagChanged,
        handleIsGameFinishedChange
      );
      (gameRef.current as Game).off(
        EVENTS_LIST.timeLeftChanged,
        handleTimeLeftChange
      );
      (gameRef.current as Game).off(
        EVENTS_LIST.isTimeOut,
        handleIsTimeOutChange
      );
      (gameRef.current as Game).off(
        EVENTS_LIST.gameRestarted,
        handleGameRestart
      );
    };
  }, [
    isInitial,
    handleIsGameFinishedChange,
    handleTimeLeftChange,
    handleIsTimeOutChange,
    handleGameRestart,
  ]);

  const providerValue = useMemo(
    () => ({
      isGameInitial: isInitial,
      isGameFinished,
      isTimeOut,
      game: gameRef,
      timeLeft,
      score,
    }),
    [isInitial, isGameFinished, isTimeOut, gameRef, timeLeft, score]
  );

  return (
    <GameContext.Provider value={providerValue}>
      {children}
    </GameContext.Provider>
  );
}

export default GameProvider;
