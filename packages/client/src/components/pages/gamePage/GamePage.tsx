import React from 'react';

import { GameProvider } from '../../modules/Game';

import { GameWrapper } from './GameWrapper';

function GamePage() {
  return (
    <GameProvider>
      <GameWrapper />
    </GameProvider>
  );
}

export { GamePage };
