/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import { Square } from "./Square";

export function WinnerModal  ({winnwe, resetGame}) {
    if(winnwe === null) return null;
    const winnerText = winnwe === false ? 'Empate' : 'Ganaste'
    return (
         
            <section className="winner">
              <div className="text">
                <h2>{
                    winnerText
                  }
                </h2>
        
                <header className="win">
                  {winnwe && <Square>{winnwe}</Square>}
                </header>
        
                <footer>
                  <button onClick={resetGame}>Empesar de nuevoi</button>
                </footer>
              </div>
            </section>
          
    )
}