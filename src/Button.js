import { useState } from "react";

const checkXOrO = (getSquare) => {
  if (getSquare === "X") {
    return "O";
  }
  return "X";
};

const Button = ({ clickedSquare, xOrOStatus }) => {
  const [xOrO, setXOrO] = useState(null);
  xOrOStatus = checkXOrO(xOrOStatus);
  
  const isXOrO = (xOrO) => {
      const nextChoice = checkXOrO(xOrO);
      setXOrO(nextChoice);
    };
    
    const buttonText = (xOrO) => {
        if(xOrO === null){
            return " ";
        }
        return xOrO;
    };
    const showButton = buttonText(xOrO);
  const handleClick = () => {
    isXOrO();

  };
  console.log(buttonText());
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

