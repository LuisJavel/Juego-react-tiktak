import { useState } from "react";
import confetti from "canvas-confetti";

import { Square } from "./components/Square";
import { TURNS } from "./constants";
import { checkWinnerFrom } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { checkEndGame } from "./logic/board";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.x);

  const [winnwe, setWinnwe] = useState(null)

  const resetGame = () =>{
    setBoard(Array(9).full(null))
    setTurn(TURNS.x)
    setWinnwe(null)

  }

  const updateBoard = (index) => {
    //para que no sobre escriba
    if (board[index] || winnwe) return;

    //actualizar el tablero
    const newBoard = [...board]; //mutables props
    newBoard[index] = turn;
    setBoard(newBoard);

    //cuambiar el tuno
    const newTurn = turn === TURNS.x ? TURNS.O : TURNS.x;
    setTurn(newTurn);

    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      confetti()
      setWinnwe(newWinner)
    } else if(checkEndGame(newBoard)){
      setWinnwe(false) ///empate
    }
  }

  return (
    <main className="board">
      <h1>Masaquiza Tic TAc</h1>
      <button onClick={resetGame}>Resete de juego</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square 
              key={index} 
              index={index} 
              updateBoard={updateBoard}>
              {square}
            </Square>
          )
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winnwe={winnwe} />
    </main>
  );
}

export default App;
