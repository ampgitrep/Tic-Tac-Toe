import { useState } from "react";
import Square from "./Square";

const changePlayer = (newPlayer) => {
  if (newPlayer === "player1") {
    return "player2";
  }
  return "player1";
};

const Board = ({ getGameState, }) => {
  const [currentPlayer, setCurrentPlayer] = useState("player1");
  const [gameState, setGameState] = useState([
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ]);

    const getNewPlayer = () => {
    const newPlayer = changePlayer(currentPlayer);
    setCurrentPlayer(newPlayer);
    
  };
    const currentGameState = getGameState;

  const row1 = [];
  const row2 = [];
  const row3 = [];
  
  for (let i = 0; i < 3; i++) {
    row1.push(gameState[i].slice());
  }
  for (let i = 3; i < 6; i++) {
    row2.push(gameState[i].slice());
  }
  for (let i = 6; i < 9; i++) {
    row3.push(gameState[i].slice());
  }



  const handleGameState = (row, cell, clicked) => {
    row.splice(cell, 1, clicked);
    setGameState([
      row1[0],
      row1[1],
      row1[2],
      row2[0],
      row2[1],
      row2[2],
      row3[0],
      row3[1],
      row3[2],
    ]);
    currentGameState(
      [
      row1[0],
      row1[1],
      row1[2],
      row2[0],
      row2[1],
      row2[2],
      row3[0],
      row3[1],
      row3[2],
      ]
    );
  };

  return (

    <table>
    <tr>
    <td><Square
        row={row1}
        cell={0}
        nextPlayer={getNewPlayer}
        activePlayer={currentPlayer}
        setGameState={handleGameState}
      />
    </td>
    <td><Square
        row={row1}
        cell={1}
        nextPlayer={getNewPlayer}
        activePlayer={currentPlayer}
        setGameState={handleGameState}
      />
    </td>
    <td><Square
        row={row1}
        cell={2}
        nextPlayer={getNewPlayer}
        activePlayer={currentPlayer}
        setGameState={handleGameState}
      />
    </td>
    </tr>
    <tr>
    <td><Square
        row={row2}
        cell={0}
        nextPlayer={getNewPlayer}
        activePlayer={currentPlayer}
        setGameState={handleGameState}
      />
    </td>
    <td><Square
        row={row2}
        cell={1}
        nextPlayer={getNewPlayer}
        activePlayer={currentPlayer}
        setGameState={handleGameState}
      />
    </td>
    <td><Square
        row={row2}
        cell={2}
        nextPlayer={getNewPlayer}
        activePlayer={currentPlayer}
        setGameState={handleGameState}
      />
    </td>
    </tr>
    <tr>
    <td><Square
        row={row3}
        cell={0}
        nextPlayer={getNewPlayer}
        activePlayer={currentPlayer}
        setGameState={handleGameState}
      />
    </td>
    <td><Square
        row={row3}
        cell={1}
        nextPlayer={getNewPlayer}
        activePlayer={currentPlayer}
        setGameState={handleGameState}
      />
    </td>
    <td><Square
        row={row3}
        cell={2}
        nextPlayer={getNewPlayer}
        activePlayer={currentPlayer}
        setGameState={handleGameState}
      />
    </td>
    </tr>
    </table>

);
};

export default Board;
