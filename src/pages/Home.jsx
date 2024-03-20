import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Heading from '../components/Heading'
import TicTacToe from '../components/TicTacToe'

function Home() {
    return (
        <>
            <Heading />
            <TicTacToe />
        </>
    )
}

export default Home