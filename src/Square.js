import { useState } from "react";

const getXOrO = (changePlayer) => {
  if(changePlayer === "player1"){
    return "X";
  }
  if(changePlayer === "player2"){
  return "O";
  }return " ";
}

const Square = ({ activePlayer, nextPlayer, setGameState, row, cell }) => {
  const [xOrO, setXOrO] = useState(null);
  const newPlayer = nextPlayer;
  const gameState = setGameState;

  const changeXOrO = () => {
    const newXOrO = getXOrO(activePlayer);
    setXOrO(newXOrO);
  }

  const handleClick = () => {
    changeXOrO();
    newPlayer();
    const getClicked = getXOrO(activePlayer);
    gameState(row, cell, getClicked);
  }

  if(xOrO === null){
    return (
      <button
        onClick={handleClick}
        style={{
          paddingLeft:"22px",
          paddingRight:"22px",
          paddingTop:"22px",
          paddingBottom:"22px",
          fontSize:"22px",
        }}
        >
          {xOrO}
      </button>
    )
  }
  return (
    <div>
        {xOrO} 
    </div>
  )
}

export default Square;