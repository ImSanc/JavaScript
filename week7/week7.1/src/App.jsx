
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {
    return (
        <div>
            <button onClick={ ()=>{
                window.location.href = "/";
            }}>Back</button>

            <button onClick={()=>{
                window.location.href = "/dashboard";
            }}>forward</button>
        <BrowserRouter>
            <Routes>
                <Route  path = '/dashboard' element={<Dashboard/>} ></Route>
                <Route path='/' element={<Landing/>}></Route>
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default App
