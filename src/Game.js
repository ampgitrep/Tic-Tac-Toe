import { useState } from "react";
import Board from "./Board";

const gameOverChange = (changeGameOver) => {
  if(changeGameOver === false){
    return true;
  }
  return false;
}

// Practice iterating these conditions to check the winner
// Write an implementation of Array.prototype.forEach
// Make sure to read the docs on forEach (MDN)
targetArray.forEach(iteratorFn);
const alexsForEach = (targetArray, iteratorFn) => {
  
};
alexsforEach(myArray, someFn);
alexsForEach(myOtherArray, myOtherFn);
// With your function, you should be able to do the following:
// For an array of numbers: console log each number + 20
// For an array of strings: console log the first two letters and the last three letters of each string
/*
const myForEach = (targetArray, someFn) => {
  if (Array.isArray(targetArray)) {
    for (i = 0; i < targetArray.length; i++) {
      someFn(targetArray[i])
    }
  }
  if (typeof targetArray === 'string') {
    return someFn(targetArray)
  }
}

const first2Last3 = (oldString) => {
  const newStr = oldString.slice(0, 2) + ' ' + oldString.slice(oldString.length - 3, oldString.length);
  console.log(newStr);
}

const add20 = (oldArray) => {
  const newArray = [];
  newArray.push(oldArray + 20);
  console.log(newArray)
}

const myArray = [1, 2, 3, 4, 5];
const myString = "I like chicken";

myForEach(myArray, add20);
myForEach(myString, first2Last3);

*/

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//track gamestate in Game as the 'single source of truth'
const Game = () => {
  const [gameState, setGameStatus] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " ", ])
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameOverBool, setGameOverBool] = useState(false);
  const [winMessage, setWinMessage] = useState("Cat's game")
  let message;

  // const handleGameStatus = (oldStatus) => {
  //   setGameStatus(oldStatus);
  // }

  const changeCurrentPlayer = () => {
    // Toggles between players.
  }
  
  const updateGameState = (id, value) => {
    const nextGameState = [...gameState];

    // We need to do a null check first using value
    nextGameState[id] = currentPlayer;
    const gameIsWon = checkIsGameWon(nextGameState);
    const gameIsOver = checkIsGameOver(nextGameState);

    if (!gameIsOver && !gameIsWon) {
      setGameStatus(nextGameState);
      changeCurrentPlayer();
    } else {
      setGameOverBool(gameIsOver);
    }
  };

  const isGameOver = () => {
    const changeGameOver = gameOverChange(gameOverBool);
    setGameOverBool(changeGameOver);
  }
  
  const handleGameOver = () => {
    setGameStatus([" ", " ", " ", " ", " ", " ", " ", " ", " ", ]);
    setGameOverBool(false);
  }
  //Need to have child components do less heavy lifting, let game do the thinking
  let catsGame = gameState.filter(e => e === " ").length;

  const checkGameOver = () => {
    //-------------------------win condition:rows----------------------------
    //XXX
    //---
    //---
    if(gameState[0] === "X" && gameState[1] === "X" && gameState[2] === "X"){
      message = "X wins on row 1";
      isGameOver();
      setWinMessage(message);
    }
    //OOO
    //---
    //---
    if(gameState[0] === "O" && gameState[1] === "O" && gameState[2] === "O"){
      message = "O wins on row 1";
      isGameOver();
      setWinMessage(message);
    }
    //---
    //XXX
    //---
    if(gameState[3] === "X" && gameState[4] === "X" && gameState[5] === "X"){
      message = "X wins on row 2";
      isGameOver();
      setWinMessage(message);
    }
    //---
    //OOO
    //---
    if(gameState[3] === "O" && gameState[4] === "O" && gameState[5] === "O"){
      message = "O wins on row 2";
      isGameOver();
      setWinMessage(message);
    }
    //---
    //---
    //XXX
    if(gameState[6] === "X" && gameState[7] === "X" && gameState[8] === "X"){
      message = "X wins on row 3";
      isGameOver();
      setWinMessage(message);
    }
    //---
    //---
    //OOO
    if(gameState[6] === "O" && gameState[7] === "O" && gameState[8] === "O"){
      message = "O wins on row 3";
      isGameOver();
      setWinMessage(message);
    }
    
    //-------------------------win condition:columns-------------------------
    //X--
    //X--
    //X--
    if(gameState[0] === "X" && gameState[3] === "X" && gameState[6] === "X"){
      message = "X wins on column 1";
      isGameOver();
      setWinMessage(message);
    }
    //O--
    //O--
    //O--
    if(gameState[0] === "O" && gameState[3] === "O" && gameState[6] === "O"){
      message = "O wins on column 1";
      isGameOver();
      setWinMessage(message);
    }
    //-X-
    //-X-
    //-X-
    if(gameState[1] === "X" && gameState[4] === "X" && gameState[7] === "X"){
      message = "X wins on column 2";
      isGameOver();
      setWinMessage(message);
    }
    //-O-
    //-O-
    //-O-
    if(gameState[1] === "O" && gameState[4] === "O" && gameState[7] === "O"){
      message = "O wins on column 2";
      isGameOver();
      setWinMessage(message);
    }
    //--X
    //--X
    //--X
    if(gameState[2] === "X" && gameState[5] === "X" && gameState[8] === "X"){
      message = "X wins on column 3";
      isGameOver();
      setWinMessage(message);
    }
    //--O
    //--O
    //--O
    if(gameState[2] === "O" && gameState[5] === "O" && gameState[8] === "O"){
      message = "X wins on column 3";
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
  //if you can turn it into a variable you can put it between the {curly braces}
  return (
    <div>
      {currentPlayer === 'X' ? (
        <div>
          <p>This is so cool</p>
          Yay X
          <p>This is so coooooooo</p>
        </div>
      ) : (
        <p>Boo O</p>
      )}
      <h1>Current player is {currentPlayer === 'X' ? 'The Eks' : 'The Ohhhh'}</h1>
      <Board
        reportClickedSquare={updateGameState}
        // updateGameState={setGameStatus}
        currentGameState={gameState}
        />
        <br/>
        <br/>
    </div>
  )
}


export default Game;