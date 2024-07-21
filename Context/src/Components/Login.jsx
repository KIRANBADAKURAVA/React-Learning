import { useState } from "react"
import UserContext from "../Context/UserContext"
import { useContext } from "react"
export default function Login(){
    const [UserName,setUserName]=useState('')
    const [Password,setPassword]=useState('')
    const {setUser}= useContext(UserContext)
    function handleClick(e){
        e.preventDefault()
        setUser({UserName, Password})
    }
    return(
        <>
        <input 
        type="text"
        value={UserName} 
        placeholder="Username"
        onChange={(e)=>setUserName(e.target.value)} />
        <input 
        type="password"
        value={Password} 
         placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)} />
        <button 
        onClick={handleClick}
        >
            Submit
        </button>
        </>
    )
}
