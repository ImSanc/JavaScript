import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/revenueCard'
import { Header } from './components/header'
import { OverView } from './components/overview'
import { Transactions } from './components/transactions'
import { Payouts } from './components/payout'
import { Orders } from './components/orders'

function App() {
  return <div className ='bg-gray-50' > 
  <Header headerName= {'Payouts'}></Header>
  <OverView></OverView>
  <div className='grid grid-cols-1 ml-6  md:grid-cols-3 sm:grid-cols-2'>
  <RevenueCard title={"Next payout"} amount={"2,312.23"} orderCount={23} isMainCard={true} payoutDate={'Today, 04:00 PM'}></RevenueCard>
  <RevenueCard title={"Amount pending"} amount={"92,312.20"} orderCount={13} ></RevenueCard>
  <RevenueCard title={"Amount processed"} amount={"23,92,312.19"} ></RevenueCard>
  </div>
  <Transactions/>
  <Payouts payouts={22} refunds={6}></Payouts>
  <Orders></Orders>
  </div>

}

export default App
