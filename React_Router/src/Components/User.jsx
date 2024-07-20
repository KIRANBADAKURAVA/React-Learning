import { useParams } from "react-router-dom"

export default function User(){
    const {userName}=useParams()
    return(

        <p>Hi {userName}</p>
    )
}