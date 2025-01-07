import { useState } from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';

function App() {
  const [activePlayer, setactivePlayer] = useState('X')
  return (
    <menu>
      <div id="game-container">
        <ol id="players">
        <Player IntialName="Player 1" symbol="X" />
        <Player IntialName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      
    </menu>
  )
}

export default App

