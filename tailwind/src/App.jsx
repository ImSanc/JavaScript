import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/revenueCard'

function App() {
  return <> 
  <div className='grid grid-cols-5'>
  <RevenueCard title={"Amount pending"} amount={"92,312.20"} orderCount={13}></RevenueCard>
  </div>
  </>
  return 
}

export default App
