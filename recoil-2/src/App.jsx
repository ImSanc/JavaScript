import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilValue ,RecoilRoot ,useRecoilState} from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, notificationSelector } from './atom'

function App() {
 return <RecoilRoot>
  <MainApp/>
 </RecoilRoot>
}

function MainApp()
{
  const networkNotificationCount = useRecoilValue(networkAtom);
  const messagesNotificationCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const totalNotificationCount = useRecoilValue(notificationSelector);
  return <div>
    
    <button>Home</button>
    <button>My Network ( { (networkNotificationCount>99) ? '99+' : networkNotificationCount } )</button>
    <button>Jobs ( { (jobsNotificationCount>99) ? '99+' : jobsNotificationCount } )</button>
    <button>Messaging ( { (messagesNotificationCount>99) ? '99+' : messagesNotificationCount } )</button>
    <button>notification ( { (notificationCount>99) ? '99+' : notificationCount } )</button>
    <button >Me ({totalNotificationCount})</button>
  </div>
}

export default App
