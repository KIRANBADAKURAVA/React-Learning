import React from "react"
import { useState } from "react"
import UserContext from "./UserContext"

const ContextProvider= ({children})=>{

    const [User , setUser]= useState(null)

   return ( <UserContext.Provider value={{User,setUser}}>
        {children}
    </UserContext.Provider>)

}
export default ContextProvider;
