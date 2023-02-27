import React, { useRef, useEffect } from 'react';
import { useGame } from '../../../../modules/Game';

function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { startGame, setCanvasElement, isGameInitial } = useGame();

  useEffect(() => {
    if (isGameInitial) {
      setCanvasElement(canvasRef.current as HTMLCanvasElement);
      startGame();
    }
  }, [isGameInitial, setCanvasElement, startGame]);

  return <canvas width={1128} height={500} ref={canvasRef} />;
}

export { Canvas };
