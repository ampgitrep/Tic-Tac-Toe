import { useState } from "react";
import Board from "./Board";

const currentPlayerToggle = (currentPlayer) => {
  if(currentPlayer === "X"){
    return "O";
  }
  return "X";
}
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
  const [gameState, setGameStatus] = useState([null, null, null, null, null, null, null, null, null, ])
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);

  let id = 0;
  const onClick = () => {
    console.log('hi');
    changeCurrentPlayer();
    console.log(currentPlayer);
    setGameStatus(currentPlayer);
  }
  const changeCurrentPlayer = () => {
    // Toggles between players.
    const nextPlayer = currentPlayerToggle(currentPlayer);
    setCurrentPlayer(nextPlayer);
  }
  
  // const checkIsGameWon = (currentGameState) => {

  //   const checkInnerArray = (innerArray) => {
  //     if(innerArray.every(e => e === innerArray[0])){
  //       setGameOver(true);
  //       }
  //     }

  //   const checkOuterArray = (outerArray) => {
  //     return outerArray.forEach(checkInnerArray);
  //   }

  //   checkOuterArray(currentGameState);
  // }
  // //value comes up from square
  // const updateGameState = (id, value) => {
  //   const nextGameState = [...gameState];
  //   if(!value){
  //     value = "X"
  //   }
  //   // We need to do a null check first using value
  //   nextGameState[id] = currentPlayer;
  //   const gameIsWon = checkIsGameWon(nextGameState);
  //   const gameIsOver = checkIsGameOver(nextGameState);

  //   if (!gameIsOver && !gameIsWon) {
  //     setGameStatus(nextGameState);
  //     changeCurrentPlayer();
  //   } else {
  //     setGameOverBool(gameIsOver);
  //   }
  // };

    return (
      <div>
        <Board onClick ={onClick} id={id} gameState={gameState}/>
      </div>
    )
 
//     if(gameOverBool === true){
//     return (
//       <div>
//         {winMessage}
//         <br/><br/><br/><br/>
//       <button
//         onClick={handleGameOver}
//       >Play Again
//       </button>
//       </div>
//     )
//   }
//  // checkGameOver();
//   //if you can turn it into a variable you can put it between the {curly braces}
//   return (
//     <div>
//       {currentPlayer === 'X' ? (
//         <div>
//           <p>This is so cool</p>
//           Yay X
//           <p>This is so coooooooo</p>
//         </div>
//       ) : (
//         <p>Boo O</p>
//       )}
//       <h1>Current player is {currentPlayer === 'X' ? 'The Eks' : 'The Ohhhh'}</h1>
//       <Board
//         reportClickedSquare={updateGameState}
//         // updateGameState={setGameStatus}
//         currentGameState={gameState}
//         />
//         <br/>
//         <br/>
//     </div>
//   )
  // return (
  //   <div>
  //     {currentPlayer === 'X' ? (
  //       <div>
  //         <p>This is so cool</p>
  //         Yay X
  //         <p>This is so coooooooo</p>
  //       </div>
  //     ) : (
  //       <p>Boo O</p>
  //     )}
  //     <h1>Current player is {currentPlayer === 'X' ? 'The Eks' : 'The Ohhhh'}</h1>
  //     <Board
  //       reportClickedSquare={updateGameState}
  //       // updateGameState={setGameStatus}
  //       currentGameState={gameState}
  //       />
  //       <br/>
  //       <br/>
  //   </div>
  // )
}


export default Game;