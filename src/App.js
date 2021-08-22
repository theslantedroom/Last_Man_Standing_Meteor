import React from 'react'
import Dice from 'react-dice-roll'
import './App.css'
window.onload = function () {
  setInterval(() => {
    document.getElementById('autoRoll').click()
  }, 1000)
}
function App () {
  return (
    <div id="autoRoll" className="App">
      <Dice size={100} triggers={['click', 'Enter', 'mouseenter']} onRoll={(value) => console.log(value)} />
    </div>
  )
}

export default App
