import { useState } from "react";
import Board from "./Board";

const gameOverChange = (changeGameOver) => {
  if(changeGameOver === false){
    return true;
  }
  return false;
}

const Game = () => {
  const [gameState, setGameStatus] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " ", ])
  const [gameOverBool, setGameOverBool] = useState(false);
  const [winMessage, setWinMessage] = useState("Cat's game")
  let message;
  console.log(gameState);
  const handleGameStatus = (oldStatus) => {
    setGameStatus(oldStatus);
  }
  
  const isGameOver = () => {
    const changeGameOver = gameOverChange(gameOverBool);
    setGameOverBool(changeGameOver);
  }
  
  const handleGameOver = () => {
    setGameStatus([" ", " ", " ", " ", " ", " ", " ", " ", " ", ]);
    setGameOverBool(false);
  }
  
  const catsGame = gameState.filter(e => e === " ").length;

  const checkGameOver = () => {
    //-------------------------win condition:rows----------------------------
    //XXX
    //---
    //---
    if(gameState[0] === "X" && gameState[1] === "X" && gameState[2] === "X"){
      message = "X wins on row1";
      isGameOver();
      setWinMessage(message);
    }
    //OOO
    //---
    //---
    if(gameState[0] === "O" && gameState[1] === "O" && gameState[2] === "O"){
      message = "O wins on row1";
      isGameOver();
      setWinMessage(message);
    }
    //---
    //XXX
    //---
    if(gameState[3] === "X" && gameState[4] === "X" && gameState[5] === "X"){
      message = "X wins on row2";
      isGameOver();
      setWinMessage(message);
    }
    //---
    //OOO
    //---
    if(gameState[3] === "O" && gameState[4] === "O" && gameState[5] === "O"){
      message = "O wins on row2";
      isGameOver();
      setWinMessage(message);
    }
    //---
    //---
    //XXX
    if(gameState[6] === "X" && gameState[7] === "X" && gameState[8] === "X"){
      message = "X wins on row3";
      isGameOver();
      setWinMessage(message);
    }
    //---
    //---
    //OOO
    if(gameState[6] === "O" && gameState[7] === "O" && gameState[8] === "O"){
      message = "O wins on row3";
      isGameOver();
      setWinMessage(message);
    }
    
    //-------------------------win condition:columns-------------------------
    //X--
    //X--
    //X--
    if(gameState[0] === "X" && gameState[3] === "X" && gameState[6] === "X"){
      message = "X wins on column1";
      isGameOver();
      setWinMessage(message);
    }
    //O--
    //O--
    //O--
    if(gameState[0] === "O" && gameState[3] === "O" && gameState[6] === "O"){
      message = "O wins on column1";
      isGameOver();
      setWinMessage(message);
    }
    //-X-
    //-X-
    //-X-
    if(gameState[1] === "X" && gameState[4] === "X" && gameState[7] === "X"){
      message = "X wins on column2";
      isGameOver();
      setWinMessage(message);
    }
    //-O-
    //-O-
    //-O-
    if(gameState[1] === "O" && gameState[4] === "O" && gameState[7] === "O"){
      message = "O wins on column2";
      isGameOver();
      setWinMessage(message);
    }
    //--X
    //--X
    //--X
    if(gameState[2] === "X" && gameState[5] === "X" && gameState[8] === "X"){
      message = "X wins on column3";
      isGameOver();
      setWinMessage(message);
    }
    //--O
    //--O
    //--O
    if(gameState[2] === "O" && gameState[5] === "O" && gameState[8] === "O"){
      message = "X wins on column3";
      isGameOver();
      setWinMessage(message);
    }

    //-------------------------win condition:diagonal------------------------
    //X--
    //-X-
    //--X
    if(gameState[0] === "X" && gameState[4] === "X" && gameState[8] === "X"){
      message = "X wins diagonally";
      isGameOver();
      setWinMessage(message);
    }
    //O--
    //-O-
    //--O
    if(gameState[0] === "O" && gameState[4] === "O" && gameState[8] === "O"){
      message = "O wins diagonally";
      isGameOver();
      setWinMessage(message);
    }
    //--X
    //-X-
    //X--
    if(gameState[2] === "X" && gameState[4] === "X" && gameState[6] === "X"){
      message = "X wins diagonally";
      isGameOver();
      setWinMessage(message);
    }
    //--O
    //-O-
    //O--
    if(gameState[2] === "O" && gameState[4] === "O" && gameState[6] === "O"){
      message = "O wins diagonally";
      isGameOver();
      setWinMessage(message);
    }
    console.log(catsGame);
    if(catsGame === 0){
      isGameOver();
    }
  }

    if(gameOverBool === true){
    return (
      <div>
        {winMessage}
        <br/><br/><br/><br/>
      <button
        onClick={handleGameOver}
      >Play Again
      </button>
      </div>
    )
  }
  checkGameOver();
  return (
    <div>
      <Board
        getGameState={handleGameStatus}
        currentGameState={gameState}
        />
        <br/>
        <br/>
    </div>
  )
}


export default Game;