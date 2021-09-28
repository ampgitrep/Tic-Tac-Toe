import { useState } from "react";
import Button from "./Button";

const checkXOrO = (getSquare) => {
  if (getSquare === "X") {
    return "O";
  }
  return "X";
};

const changePlayer = (newPlayer) => {
  if(newPlayer === "player1"){
      return "player2"
  }
  return "player1"
};

const GameWinCondition = ({ Activeplayer, isGameOver, clickedSquare }) => {
  const [clickState, setClickState] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState("player1");
  const [gameState, setGameState] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " ", ]);
  
  const getNewPlayer = () => {
    const newPlayer = changePlayer(currentPlayer);
    setCurrentPlayer(newPlayer);
};

  const row1 = [];
  const row2 = [];
  const row3 = [];
  for(let i=0; i<3; i++){
    row1.push(gameState[i].slice())
  }
  for(let i=3; i<6; i++){   
    row2.push(gameState[i].slice())
  }
  for(let i=6; i<9; i++){
    row3.push(gameState[i].slice())
  }

  const handleGameState = () => {
    setGameState([row1[0], row1[1], row1[2], row2[0], row2[1], row2[2], row3[0], row3[1], row3[2]])
  }
  const moveCheck = () => {
    const checkMoveState = checkXOrO(clickState);
    setClickState(checkMoveState);
  };


  return (
    <div>
      <Button 
        xOrOStatus={moveCheck}
        player={getNewPlayer}
        id="c1r1"        
        >
      </Button>
      <Button
        xOrOStatus={moveCheck}
        player={getNewPlayer}
        id="c1r2"
        >
      </Button>
      <Button
        xOrOStatus={moveCheck}
        player={getNewPlayer}
        id="c1r3"
        >
      </Button>
      <br/>
      <Button 
        xOrOStatus={moveCheck}
        player={getNewPlayer}
        id="c2r1"
        >
      </Button>
      <Button 
        xOrOStatus={moveCheck}
        player={getNewPlayer}
        id="c2r2"
        >
      </Button>
      <Button 
        xOrOStatus={moveCheck}
        player={getNewPlayer}
        id="c2r3"
        >
      </Button>
      <br/>
      <Button 
        xOrOStatus={moveCheck}
        player={getNewPlayer}
        id="c3r1"
        >
      </Button>
      <Button 
        xOrOStatus={moveCheck}
        player={getNewPlayer}
        id="c3r2"
        >
      </Button>
      <Button 
        xOrOStatus={moveCheck}
        player={getNewPlayer}
        id="c3r3"
        >
      </Button>
    </div>
  );
};

export default GameWinCondition;
