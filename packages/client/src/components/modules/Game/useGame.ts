import { RefObject, useCallback, useContext, useMemo } from 'react';
import { Game } from '../../../modules/Game';

import GameContext from './GameContext';

function useGame() {
  const { isGameInitial, isGameFinished, isTimeOut, game, timeLeft, score } =
    useContext(GameContext);

  const startGame = useCallback(() => {
    (game as RefObject<Game>).current?.startGame();
  }, [game]);

  const endGame = useCallback(() => {
    (game as RefObject<Game>).current?.endGame();
  }, [game]);

  const setCanvasElement = useCallback(
    (canvasElement: HTMLCanvasElement) => {
      (game as RefObject<Game>).current?.setCanvasElement(canvasElement);
    },
    [game]
  );

  const restartGame = useCallback(() => {
    (game as RefObject<Game>).current?.restartGame();
  }, [game]);

  return useMemo(
    () => ({
      isGameInitial,
      isGameFinished,
      isTimeOut,
      timeLeft,
      score,
      startGame,
      endGame,
      setCanvasElement,
      restartGame,
    }),
    [
      isGameInitial,
      isGameFinished,
      isTimeOut,
      timeLeft,
      score,
      startGame,
      endGame,
      setCanvasElement,
      restartGame,
    ]
  );
}

export default useGame;
