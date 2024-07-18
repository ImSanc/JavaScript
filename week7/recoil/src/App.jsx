
import { RecoilRoot, useRecoilValue , useSetRecoilState } from 'recoil'
import './App.css'
import { countAtom } from '../store/atoms/count'

function App() {
  return <div>

    <RecoilRoot>
      <Count />
    </RecoilRoot>
    </div>
}

function Count( ) {
  console.log("re render");
  return <div>
    
    <CountRenderer />
    <Button/>
    <EvenOdd/>
  </div>
}

function EvenOdd()
{
  const count = useRecoilValue(countAtom);
  return <div>
    { (count%2==0 ? 'it is even' : 'it is odd')}
  </div>
}

function Button()
{
  console.log("re render");
  const  setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={ ()=>{ 
       setCount(count => count+1)
    }}>Increment</button>

    <button onClick={ ()=>{ 
        setCount(count => count-1)
    }}>decrement</button>
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

export default App
