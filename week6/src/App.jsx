
import './App.css'

function App() {
  return(
    <div>
  <CardWrapper innerComponent = {<TextComponent/>}> </CardWrapper>
  <CardWrapper innerComponent = {<TextComponent/>}> </CardWrapper>
  </div>
  )
}

function TextComponent()
{
  return <div>
    hi there
  </div>
}

function CardWrapper({innerComponent})
{
  return <div style={ {border : "2px solid black", padding : "10px" , margin : "10px"}}>  
    {innerComponent}
  </div>
}

export default App
