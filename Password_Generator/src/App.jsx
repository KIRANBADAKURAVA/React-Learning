import { useState, useCallback , useEffect, useRef} from 'react'

import './App.css'


function App() {
  const [Length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password,setpassword]=useState('')
  const pref=useRef('null') 
  const passwardgen= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

     if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"
    for (let index = 1; index <=Length; index++) {
        let i= Math.floor(Math.random()*str.length+1)
        pass+= str.charAt(i)
        
    }
    setpassword(pass)
      
    
  },[Length,numberAllowed,charAllowed,setpassword])

  
  const clickfunc= useCallback(()=>{
    pref.current?.select()
    window.navigator.clipboard.writeText(password)
    }, [password])

  useEffect(()=>{passwardgen()},[length,numberAllowed,charAllowed,passwardgen])

  return (
    <>
      <div className='flex flex-wrap justify-center text-white' >
        <div className='w-auto  bg-gray-700 px-3 py-5 rounded-md'>
          <div className='flex  justify-center w-96'>
            <input type='text'value={password} placeholder={'Password'} ref={pref} readOnly
            className='w-4/5 text-red-600 bg-white rounded-l-md px-2 py-3'></input>
            <button onClick={clickfunc} className='w-1/5 bg-blue-700  rounded-r-md hover:bg-blue-400'>Copy</button>
          </div><br />
          <div className='flex justify-start'>
            <input type='range'  value={Length} min={8} max={100} onChange={(e)=>setLength((e.target.value))}
            className="cursor-pointer mx-2"></input>
            <label >Length:{Length}</label>
            <input type='checkbox' defaultChecked={numberAllowed} onChange={()=>setNumberAllowed(!numberAllowed)}
            className="ml-2 mr-1 text-white "  ></input>
            <label >Numbers</label>
            <input type='checkbox'  defaultChecked={charAllowed} onChange={()=>setCharAllowed(!charAllowed)}
            className="ml-2 mr-1 text-white "  ></input>
            <label >Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App