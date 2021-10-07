//who am i and what is my value? and how do I report interactions up to my boss
import { useState } from "react";

const Square = ({ id, player, value, onClick, gameResetClick, gameOver }) => {
  const [disabled, setDisabled] = useState(false);
  
  const reset = () => {
    gameResetClick();
  }
  
  const handleClick = () => {
    onClick(id, player);
    setDisabled(true);
  }
  
  return (
    <div>
      {gameOver === true ? (
        <button
        onClick={reset}>Play again?</button>
      ) : (  
    <button
      onClick={handleClick}
      disabled={disabled}
      style={{
        width: '40px',
        height: '40px',
      }}
    >{value}
    </button>)}
    </div>
  )
}

export default Square;