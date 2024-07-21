
import './App.css'
import Login from './Components/Login'
import ContextProvider from './Context/Provider'
import Profile from './Components/Profile'
function App() {
  

  return (
  <ContextProvider>
    <Login/>
    <Profile/>
  </ContextProvider>
  )
}

export default App
