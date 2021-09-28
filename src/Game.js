import { useState } from "react";
import GameWinCondition from "./GameWinCondition";

const Game = ({ isGameOver, player, gameState, clickedSquare }) => {

  return (
    <div>
      <GameWinCondition/>
    </div>
  )
}


export default Game;