import { useContext } from "react"
import UserContext from "../Context/UserContext"


export default function Profile(){

    const {User}=useContext(UserContext)
    if (User==null) return <div>please login</div>

    return <h1>Hi {User.UserName}</h1>
}