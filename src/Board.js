import Square from "./Square";

//board just gives squares IDs
const Board = ({ player, onClick, gameState }) => {

  const rows = [[], [], []];
  gameState.forEach((val, index) => {
    rows[Math.floor(index / 3)].push({ value: val, id: index })
  });

  return (

    <table>
      {rows.map((row) => {
        return (
          <tr>
            {row.map((squares) => {
              return (
                <td>
                  <Square value={squares.value} player={player} onClick={onClick} id={squares.id} />
                </td>
              )
            })}
          </tr>
        )
      }
      )}
    </table>
  )
};

export default Board;