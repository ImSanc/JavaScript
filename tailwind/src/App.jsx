import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/revenueCard'
import { Header } from './components/header'

function App() {
  return <> 
  <Header headerName= {'Payouts'}></Header>
  <div className='grid grid-cols-1 ml-6  md:grid-cols-3 sm:grid-cols-2'>
  <RevenueCard title={"Next payout"} amount={"2,312.23"} orderCount={23} isMainCard={true}></RevenueCard>
  <RevenueCard title={"Amount pending"} amount={"92,312.20"} orderCount={13} ></RevenueCard>
  <RevenueCard title={"Amount processed"} amount={"23,92,312.19"} ></RevenueCard>
  </div>
  </>
  return 
}

export default App
