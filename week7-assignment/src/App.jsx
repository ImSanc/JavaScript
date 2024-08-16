import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Profile } from './pages/Profile'
import { BackGround } from './pages/Background'
import { DashBoard } from './pages/Dash'
import { ParagraphGen } from './pages/ParagraphGen'

function App() {


  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<DashBoard/>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/background" element={<BackGround/>}/>
        <Route path="/paragraphGenerator" element={<ParagraphGen/>}/>
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App
