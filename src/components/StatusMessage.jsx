import React from 'react'

const StatusMessage = ({ winner, current }) => {
  const noMoveLeft = current.board.every(el => el !==null);

    return (
    <div className="status-message">

       {winner && (
           <>
           winner is {' '}
           <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
               {winner}

           </span>
           </>
       )}
       {!winner && !noMoveLeft && 
       <>
       Next player is <span className={current.isXNext ? 'text-green' : 'text-orange'}>{current.isXNext ? 'X' : '0'} </span>
       
       </>} 
       {!winner && noMoveLeft && <>
       <span className="text-green">X</span> and <span className="text-orange">O</span> tied
       </>}

    </div>

  )

}

export default StatusMessage