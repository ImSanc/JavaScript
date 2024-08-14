import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Profile } from './pages/Profile'
import { BackGround } from './pages/Background'

function App() {


  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/background" element={<BackGround/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
