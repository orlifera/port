import React, { useState, useEffect } from 'react'
// import circle from '../assets/circle.png'
// import cross from '../assets/cross.png'

let data = Array(9).fill(null)
console.log(data)


function TicTacToe() {

    const [count, setCount] = useState(0);
    const [Lock, setLock] = useState(false)

    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = ` <img src=${cross} alt="cross" />`;
            data[num] = "X";
            setCount(c => c + 1);
        } else {
            e.target.innerHTML = ` <img src=${circle} alt="circle" />`;
            data[num] = "O";
            setCount(c => c + 1);
        }
    }

    const checkWinner = () => {
    }


    return (
        <div className='board-container'>
            <h2 className='TicTac'>Tic Tac Toe</h2>
            <div className='board'>
                <div className="row1">
                    <div className="box" onClick={ (e) => toggle(e, 0) }></div>
                    <div className="box" onClick={ (e) => toggle(e, 1) }></div>
                    <div className="box" onClick={ (e) => toggle(e, 2) }></div>
                </div>
                <div className="row2">
                    <div className="box" onClick={ (e) => toggle(e, 3) }></div>
                    <div className="box" onClick={ (e) => toggle(e, 4) }></div>
                    <div className="box" onClick={ (e) => toggle(e, 5) }></div>
                </div>
                <div className="row3">
                    <div className="box" onClick={ (e) => toggle(e, 6) }></div>
                    <div className="box" onClick={ (e) => toggle(e, 7) }></div>
                    <div className="box" onClick={ (e) => toggle(e, 8) }></div>
                </div>
            </div>
            <button className='reset'>Reset</button>

        </div>
    )
}

export default TicTacToe