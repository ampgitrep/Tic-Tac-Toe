import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import ScoreTracking from "./table";
const XorO = (currentStatus) => {
  if(currentStatus === "O"){
      return "X"        
  }
  return "O"
}

const nextPlayer = (playerState) => {
  if(playerState === "Player1"){
    return "Player2";
  }
  return "Player1";
}

function App() {
  const [c1r1, setC1r1] = useState('O');
  const [c1r2, setC1r2] = useState('O');
  const [c1r3, setC1r3] = useState('O');
  const [c2r1, setC2r1] = useState('O');
  const [c2r2, setC2r2] = useState('O');
  const [c2r3, setC2r3] = useState('O');
  const [c3r1, setC3r1] = useState('O');
  const [c3r2, setC3r2] = useState('O');
  const [c3r3, setC3r3] = useState('O');
  const [activePlayer, setActivePlayer] = useState("Player1")

  const isPlayerActive = () => {
    const nextActivePlayer = nextPlayer(activePlayer);
    setActivePlayer(nextActivePlayer)
    console.log(activePlayer)
  }

  const newC1r1 = () => {
    const newButtonState = XorO(c1r1);
      setC1r1(newButtonState);
    console.log("Top left: "+c1r1);
  }
  const newC1r2 = () => {
    const newButtonState = XorO(c1r2);
      setC1r2(newButtonState);
    console.log("Top middle: "+c1r2);
  }
  const newC1r3 = () => {
    const newButtonState = XorO(c1r3);
      setC1r3(newButtonState);
    console.log("Top right: "+c1r3);
  }
  
  const newC2r1 = () => {
    const newButtonState = XorO(c2r1);
      setC2r1(newButtonState);
    console.log("Middle left: "+c2r1);
  }
  const newC2r2 = () => {
    const newButtonState = XorO(c2r2);
      setC2r2(newButtonState);
    console.log("Middle: "+c2r2);
  }
  const newC2r3 = () => {
    const newButtonState = XorO(c2r3);
      setC2r3(newButtonState);
    console.log("Middle right: "+c2r3);
  }
  
  const newC3r1 = () => {
    const newButtonState = XorO(c3r1);
      setC3r1(newButtonState);
    console.log("Bottom left: "+c3r1);
  }
  const newC3r2 = () => {
    const newButtonState = XorO(c3r2);
      setC3r2(newButtonState);
    console.log("Bottom middle: "+c3r2);
  }
  const newC3r3 = () => {
    const newButtonState = XorO(c3r3);
      setC3r3(newButtonState);
    console.log("Bottom right: "+c3r3);
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Tic-Tac-Toe.
        </p>
        <table id="game">
        <td>
          <tr>
            <Button 
              id={"c1r1"}
              buttonXOrO={newC1r1}
              buttonState={c1r1}
              player={activePlayer}
            />
            <Button 
              id={"c1r2"}
              buttonXOrO={newC1r2}
              buttonState={c1r2}
              player={activePlayer}
              />
            <Button 
              id={"c1r3"}
              buttonXOrO={newC1r3}
              buttonState={c1r3}
              player={activePlayer}
            />
            </tr>
          <tr>
            <Button 
              id={"c2r1"}
              buttonXOrO={newC2r1}
              buttonState={c2r1}
              player={activePlayer}
            />
            <Button 
              id={"c2r2"}
              buttonXOrO={newC2r2}
              buttonState={c2r2}
              player={activePlayer}
            />
            <Button  
              id={"c2r3"}
              buttonXOrO={newC2r3}
              buttonState={c2r3}
              player={activePlayer}
            />
          </tr>
          <tr>
            <Button 
              id={"c3r1"}
              buttonXOrO={newC3r1}
              buttonState={c3r1}  
              player={activePlayer}
            />
            <Button 
              id={"c3r2"}
              buttonXOrO={newC3r2}
              buttonState={c3r2}  
              player={activePlayer}
            />
            <Button 
              id={"c3r3"}
              buttonXOrO={newC3r3}
              buttonState={c3r3}
              player={activePlayer}  
            />
          </tr>
        </td>
        </table>
      <ScoreTracking />
      </header>
    </div>
  );
}

export default App;
