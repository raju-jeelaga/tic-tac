import { useState } from "react";

const intialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
export default function GameBoard({ onSelectAquare, turns }){
    let gameBoard = intialGameBoard;
    for(const turn of turns){
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }
    // const [gameBoard, setGameBoard] = useState(intialGameBoard);
    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedGameBoard[rowIndex][colIndex] = isActiveSymbol;
    //         return updatedGameBoard;
    //     });
    //     onSelectAquare()
    // }
    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectAquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}