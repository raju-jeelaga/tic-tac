import Player from './components/Player.jsx';

function App() {
  return (
    <menu>
      <div id="game-container">
        <ol id="players">
        <Player IntialName="Player 1" symbol="X" />
        <Player IntialName="Player 2" symbol="O" />
        </ol>
      </div>
      Game Board
    </menu>
  )
}

export default App

