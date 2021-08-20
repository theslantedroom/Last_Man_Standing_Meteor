import React from 'react'
import Dice from 'react-dice-roll'
import './App.css'

function App () {
  return (
    <div className="App">
      <Dice onRoll={(value) => console.log(value)} />
    </div>
  )
}

export default App
