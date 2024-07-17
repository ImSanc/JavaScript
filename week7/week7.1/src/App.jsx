
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/landing'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path = '/dashboard' element={<Dashboard/>} ></Route>
                <Route path='/landing' element={<Landing/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
