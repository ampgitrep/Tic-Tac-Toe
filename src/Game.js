import { useState } from "react";
import Board from "./Board";
import Square from "./Square";

const currentPlayerToggle = (currentPlayer) => {
  if (currentPlayer === "X") {
    return "O";
  }
  return "X";
}

//track gamestate in Game as the 'single source of truth'
const Game = () => {
  const [gameState, setGameState] = useState([null, null, null, null, null, null, null, null, null,])
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [winConditions, setWinConditions] = useState([[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],])
  
  const changeCurrentPlayer = () => {
    const nextPlayer = currentPlayerToggle(currentPlayer);
    setCurrentPlayer(nextPlayer);
  }
  
  const checkIsGameWon = (currentState) => {
    let gameIsWon = false;
    let newConditions = [...winConditions];
    //loop through array of arrays
    currentState.forEach((val, index) => {
      //loop through inner arrays
      newConditions.forEach(arr => {
        //loop through numbers in each inner array
        arr.forEach((e) => {
          //null check and if the number in the inner array matches the index of our gameState that has just changed...
          if (val !== null && e === index) {
            //replace the number at the index of the matched number with the new "X" or "O"
            arr.splice(arr.indexOf(e), 1, val);
          }
        })
      })
    })
   
    //loop through arrays in local winConditions object
    newConditions.forEach((arr) => {
      //if every value in any of currentGame's arrays are all "X" or "O"
      if (arr.every(v => v === "X") || arr.every(v => v === "O")) {
        gameIsWon = true;
        setWinner(gameIsWon);
        setGameOver(gameIsWon);
      }
    })
    return gameIsWon;
  }

  const checkIsGameOver = (currentGameState) => {
    if (currentGameState.every(e => e !== null)) {
      setGameOver(true);
      return true;
    }
    return false;
  }

  //value comes up from square
  const updateGameState = (id, value) => {
    const nextGameState = [...gameState];
    if (!value) {
      value = "X"
    }
    // We need to do a null check first using value
    nextGameState[id] = currentPlayer;
    const gameIsWon = checkIsGameWon(nextGameState);
    const gameIsOver = checkIsGameOver(nextGameState);
    
    if (!gameIsOver && !gameIsWon) {
      setGameState(nextGameState);
      changeCurrentPlayer();
    }
  };
  const onClick = (id, value) => {
    updateGameState(id, value);
  }
  const resetGame = () => {
    setGameState([null, null, null, null, null, null, null, null, null])
    setGameOver(false);
    setWinner(null);
    setCurrentPlayer("X");
    setWinConditions([[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]);
  }

  return (
    <div>
      {winner !== null ? (
        <p>
          {currentPlayer} wins!!
          <Square gameOver={gameOver} gameResetClick={resetGame} />
        </p>

      ) : (
        gameOver === false ? (
          <div>
            <Board onClick={onClick} gameState={gameState} player={currentPlayer} />
          </div>
        ) : (
          <p>
            Cat's Game!
            <Square gameOver={gameOver} gameResetClick={resetGame} />
          </p>
        )
      )}
    </div>
  )
}

export default Game;





// Practice iterating these conditions to check the winner
// Write an implementation of Array.prototype.forEach
// Make sure to read the docs on forEach (MDN)
// targetArray.forEach(iteratorFn);
// const alexsForEach = (targetArray, iteratorFn) => {

// };
// alexsforEach(myArray, someFn);
// alexsForEach(myOtherArray, myOtherFn);
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
