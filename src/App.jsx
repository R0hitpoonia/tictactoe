import React, {useState} from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import "./styles/root.scss"
import { calculateWinner } from "./helper";

const NEWGAME = [
  {
    board: Array(9).fill(null), isXNext: true
  },
];

const App = () => {
  
  const [history, sethistory] = useState(NEWGAME);
  const [ currentMove, setCurrentMove ] = useState(0);
  const current = history[currentMove];

  const {winner, winningSquares } = calculateWinner(current.board);
  
  const handleSquareClick = (position) => {

    if(current.board[ position ] || winner ) {
      return;
    }

      sethistory( (prev) => {
        const last = prev[prev.length - 1];

        
      const newBoard = last.board.map((Square, pos) => {
        if(pos === position) {
          return last.isXNext ? 'X' : '0';
        }

        return Square;
      });

        return prev.concat({ board: newBoard, isXNext: !last.isXNext})

    });

    setCurrentMove(prev => prev + 1);
  };

  const moveTo = move => {
      setCurrentMove(move);
  };

  const onNewGame=() => {
    sethistory(NEWGAME);
    setCurrentMove(0); 
  }
  
  return(
  <div className="app">
    <h1>TIC TAC TOE!</h1> 
    <StatusMessage winner={winner} current={current} />
    <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares}/>
    <button type="button" onClick={onNewGame}>Start New Game</button>
    <History history={history} moveTo={moveTo} currentMove={currentMove} />

  </div>
  );
};

export default App;
