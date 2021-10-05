import { useState } from "react";
import Square from "./Square";

//board just gives squares IDs
const Board = ({  value, onClick, reportClickedSquare, gameState, id }) => {

  // JavaScript primitives are all numbers, all strings, null, undefined, true, false
  //iterate through these rows and "squares" loops in loops, start in inside square (for loops)

  const newId = id();
  const row1 = [[], [], []];
  const row2 = [[], [], []];
  const row3 = [[], [], []];
  
  const increaseByOne = () => {
    const currentId = id + 1;
    const  newId = id(currentId)
    return newId;
  }
  
  [row1, row2, row3].forEach(arr => {
    arr.forEach(obj => {
      const id  = increaseByOne()
      obj.push(gameState[id]);
    })
  })

  console.log([row1, row2, row3])
  return (
    //Research Array.prototype.map = returns a new array thats created by running the passed function on every element of the original array

    <div>
      <table>
        {[[row1, row2, row3].map(function (currentRow) {
          return (
            <tr>
              {currentRow.map((value, index) => {
                return (
                  <td>  
                    <Square value={value} id={id} onClick={onClick}/>
                  </td>
                );
              })}
            </tr>
          );
        })]}
      </table>
    </div>);
}


export default Board;










// return (
//   //Research Array.prototype.map = returns a new array thats created by running the passed function on every element of the original array
//   <div>
//     {[currentBoard.map(function (currentRow) {
//       return (
//         <table>
//         <tr>
//           {currentRow.map((value, index) => {
//             <Square value={value} index={index} />
//           })}
//         </tr>
//         </table>
//       );
//     })]}
//   </div>
// );
// }


// export default Board;
