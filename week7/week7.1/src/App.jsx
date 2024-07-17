
import './App.css'
import React from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
const Landing  =  React.lazy( ()=> import('./components/Landing')  )
const Dashboard = React.lazy( ()=> import('./components/Dashboard') );

function App() {
    return (
        <div>
            
        <BrowserRouter>
            <AppBar/>
            <Routes>
                <Route  path = '/dashboard' element={<Dashboard/>} ></Route>
                <Route path='/' element={<Landing/>}></Route>
            </Routes>
        </BrowserRouter>
        </div>
    )
}

function AppBar() {
    const navigate = useNavigate();
    return <div>
        <button onClick={ ()=>{
               navigate("/")
            }}>Back</button>

            <button onClick={()=>{
                navigate("/dashboard")
            }}>forward</button>
            
    </div>
}

export default App
