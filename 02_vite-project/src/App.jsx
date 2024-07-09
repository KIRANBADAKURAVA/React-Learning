import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function inc(){
    console.log(count);
    if(count<=19){
    setCount(count+1)
  }


  }
  function dec(){
    console.log(count);
    if(count>0){
    setCount(count-1)
  }


  }

  return (
    <>
    <h1>Hooks</h1>
    <p>Minimum is 0 And  Maximum is 20 </p>
    <button style={{ margin: '5px'}} onClick={inc}>INC:{count}</button>
    <button onClick={dec}>DEC:{count}</button>
    </>
  )
}

export default App
