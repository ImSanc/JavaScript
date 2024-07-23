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
import { SideBar } from './components/sidebar'

function App() {

  const orders = [{ Id : 281209,
    status : 'Successful',
    transactionId : 131634495747,
    refundDate : 'Today, 08:45 PM',
    orderAmount : '1,125.00'
   },
   { Id : 281208,
    status : 'Processing',
    transactionId : 131634495747,
    refundDate : 'Yesterday, 8:45 PM',
    orderAmount : '1,125.00'
   },
   { Id : 281207,
    status : 'Failed',
    transactionId : 131634495747,
    refundDate : '12 Jul 2023, 3:00 PM',
    orderAmount : '1,125.00'
   },
   { Id : 281206,
    status : 'Successful',
    transactionId : 131634495747,
    refundDate : '12 Jul 2023, 3:00 PM',
    orderAmount : '1,125.00'
   }]

  return <div className ='bg-gray-50 flex w-full h-screen' >
    <div className="w-64">
      <SideBar/>
    </div>
  <div className="flex-grow">
  <Header headerName= {'Payouts'}></Header>
  <OverView></OverView>
  <div className='grid grid-cols-1 ml-6  md:grid-cols-3 sm:grid-cols-2'>
  <RevenueCard title={"Next payout"} amount={"2,312.23"} orderCount={23} isMainCard={true} payoutDate={'Today, 04:00 PM'}></RevenueCard>
  <RevenueCard title={"Amount pending"} amount={"92,312.20"} orderCount={13} ></RevenueCard>
  <RevenueCard title={"Amount processed"} amount={"23,92,312.19"} ></RevenueCard>
  </div>
  <Transactions/>
  <Payouts payouts={22} refunds={6}></Payouts>
  <Orders orders={orders}></Orders>
  </div>
  </div> 

}

export default App
