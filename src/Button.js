import { useState } from "react";

const checkXOrO = (currentPlayer) => {
  if (currentPlayer === "player2") {
    return "O";
  }
  return "X";
};


const Button = ({ player, id, xOrOStatus }) => {
  const [xOrO, setXOrO] = useState(null);
  const [clickCount, setClickCount] = useState(0);
  //const [playerState, setPlayerState] = useState("player1");
  const targetButton = id;
  const playerStatus = player === "player1" ? "player2" : "player1";
  


  const isXOrO = (playerStatus) => {
    const nextChoice = checkXOrO(playerStatus);
    setXOrO(nextChoice);
  };

  const buttonText = (xOrO) => {
    if (xOrO === null) {
      checkXOrO(xOrO);
    }
    return xOrO;
  };
  
  const showButton = buttonText(xOrO);

  const handleCount = () => {
      let count = 0;
      count += 1;
      setClickCount(count);
  }

  const handleClick = () => {
        isXOrO();
        console.log(targetButton);
        console.log(playerStatus);
    };


  return (
    <button
      onClick={handleClick}
      style={{
        paddingTop: "44px",
        fontSize: "32px",
        paddingBottom: "44px",
        paddingRight: "44px",
        paddingLeft: "44px",
      }}
    >
      {showButton}
    </button>
  );
};

export default Button;
