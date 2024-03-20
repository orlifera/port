import React, { useState, useRef } from 'react'
import circle from '../assets/images/circle.png'
import cross from '../assets/images/cross.png'

let data = ["", "", "", "", "", "", "", "", ""];
console.log(data)


function TicTacToe() {

    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const titleRef = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

    const toggle = (e, num) => {
        if (lock || data[num]) {
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

        checkWin(data);
    }




    function checkWin(data) {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2]);
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            won(data[5]);
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            won(data[6]);
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            won(data[7]);
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2]);
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            won(data[6]);
        }
    }
    const won = (winner) => {
        setLock(true);
        if (winner === "X") {
            titleRef.current.innerHTML = "Cross Won!";
        } else {
            titleRef.current.innerHTML = "Circle Won!";
        }
    }



    const reset = () => {
        console.log("reset");
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        titleRef.current.innerHTML = "Tic Tac Toe";
        box_array.map((e) => {
            e.current.innerHTML = "";
        })
    }

    return (
        <div className='board-container'>
            <h2 className='TicTac' ref={ titleRef }>Tic Tac Toe</h2>
            <div className='board'>
                <div className="row1">
                    <div className="box" ref={ box1 } onClick={ (e) => toggle(e, 0) }></div>
                    <div className="box" ref={ box2 } onClick={ (e) => toggle(e, 1) }></div>
                    <div className="box" ref={ box3 } onClick={ (e) => toggle(e, 2) }></div>
                </div>
                <div className="row2">
                    <div className="box" ref={ box4 } onClick={ (e) => toggle(e, 3) }></div>
                    <div className="box" ref={ box5 } onClick={ (e) => toggle(e, 4) }></div>
                    <div className="box" ref={ box6 } onClick={ (e) => toggle(e, 5) }></div>
                </div>
                <div className="row3">
                    <div className="box" ref={ box7 } onClick={ (e) => toggle(e, 6) }></div>
                    <div className="box" ref={ box8 } onClick={ (e) => toggle(e, 7) }></div>
                    <div className="box" ref={ box9 } onClick={ (e) => toggle(e, 8) }></div>
                </div>
            </div>
            <button className='reset' onClick={ () => { reset() } } value="Reset" >Reset</button>

        </div>
    )
}

export default TicTacToe