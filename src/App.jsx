import { useState } from 'react'
import './App.css'
import GameBoard from './GameBoard'

function App() {

  return (
    <>
      hello world
      <GameBoard PShip={[[5,5],[5,6],[5,7]]}/>
    </>
  )
}

export default App
