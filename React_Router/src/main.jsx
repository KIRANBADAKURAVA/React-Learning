import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import User from './Components/User.jsx'
import GitHub from './Components/GitHub.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[{
      path:'',
      element: <Home/>
    },

  {
    path:'about',
      element: <About/>
  },
  {
    path:'user',
      element: <User/>
  },
  {
    path:'user/:userName',
      element: <User/>
  },
  {
    path:'github',
      element: <GitHub/>
  },


],
  }
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
