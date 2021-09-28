import { useState } from "react";

const newButtonText = (p) => {
    if(p === "Player1"){
        return "X";
    }
    return "O";
}
const playerIsActive = (a) => {
    if(a === "Player1"){
        return "Player2"
    }
    return "Player1"
};

const Button = ({ buttonXOrO, player, buttonState }) => {
const [name, setName] = useState("--");
const [clickState, setClickState] = useState(buttonState);;
const [playerActive, setPlayerActive] = useState(player);

const changeText = () => {
    const currentState = buttonXOrO(newState(clickState));
    setClickState(currentState); 
    display();
    handleActivePlayer();
}
const handleActivePlayer = () => {
    const isActive = playerIsActive(playerActive);
    setPlayerActive(isActive);
    console.log(playerActive)
    }
    

const display = () => {
const newName = newButtonText(name);
setName(newName);
}

const newState = (currentStatus) => {
    return currentStatus;
}
const returnName = (newName) => {
    return newName;
}

return (
        <button 
            onClick={changeText}
            style={{
                paddingTop:"44px",
                fontSize: "32px",
                paddingBottom:"44px",
                paddingRight:"44px",
                paddingLeft:"44px",
        }}>{buttonState}
        </button>
    )
}

export default Button;