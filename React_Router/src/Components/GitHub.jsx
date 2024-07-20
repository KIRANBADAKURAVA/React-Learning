import { useEffect, useState } from "react";

export default function GitHub(){
    const [data,setData]= useState({})
    useEffect(()=>{
        fetch('https://api.github.com/users/KIRANBADAKURAVA')

        .then((response)=> response.json())
        .then((data)=>setData(data))
        .catch((error)=> console.log(error))
    },[])
    return(
        <p>Followers: {data.following}</p>
    )
}