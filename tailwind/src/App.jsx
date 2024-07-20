import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return <div style={ { display : "flex", justifyContent :'space-between'}}>
    <div style={ { background: "green"}}> div 1 </div>
    <div style={ { background: "red"}}> div 2</div>
    <div style={ { background: "yellow"}}> div 3</div>
  </div>
}

export default App
