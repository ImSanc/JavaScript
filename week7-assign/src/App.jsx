import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Profile } from './components/Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/profile"  element= { <Profile/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
