import React, { useEffect, useState } from 'react'
import Square from './Square'
import './App.css'

const Tictactoe = () => {

    const [state,setstate] = useState(Array(9).fill(null))

    const [nullState,setNullState] = useState(false)

    console.log("nullstate",nullState)


    useEffect(() => {
      const hasNoNull = ()=>{ 
        if(state.every((element)=>element !== null)){
      setNullState(true);
        }
      };
      hasNoNull();
    }, [state])
    

    const[isXTurn,setIsXTurn] = useState(true)
    console.log(state)

    const checkWinner = () => {
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];

        for (let logic of winnerLogic){
            const [a,b,c] = logic;
            if(state[a] !== null && state[a]===state[b] && state[a]===state[c]){
                return state[a];
            }
        }
        return false;
    }

    const isWinner = checkWinner();



    const handleClick = (index) =>{

        const copystate = [...state];
        copystate[index] = isXTurn ? "X" : "O";
        setstate(copystate);
        setIsXTurn(!isXTurn);
        console.log("clicked", index );
    }

  return (
    <>
    <div className="outeContainer">
                
    <span className='maintext'>TIC-TAC-TOE</span>
      {isXTurn ? (<><h1>Turn of X</h1></>):(<><h1>Turn of O</h1></>)}

    <div className="boardContainer">
        
       { isWinner ?(<>{isWinner} won the game</>) :(
       <>
          {nullState ? (<h2 className='endText'>GAME OVER..! Please refresh the page</h2>) :(
            <>
        <div className="boardRow boardRow1">
            <Square onClick={()=> handleClick(0)} value={state[0]} />
            <Square onClick={()=> handleClick(1)} value={state[1]} />
            <Square onClick={()=> handleClick(2)} value={state[2]} />
        </div>
        <div className="boardRow boardRow1">
            <Square onClick={()=> handleClick(3)} value={state[3]}/>
            <Square onClick={()=> handleClick(4)} value={state[4]}/>
            <Square onClick={()=> handleClick(5)} value={state[5]}/>
        </div>
        <div className="boardRow">
            <Square onClick={()=> handleClick(6)} value={state[6]}/>
            <Square onClick={()=> handleClick(7)} value={state[7]}/>
            <Square onClick={()=> handleClick(8)} value={state[8]}/>
        </div>
        </>
          )}
        </>)}

    </div>
    </div>
    
    </>
  )
}

export default Tictactoe