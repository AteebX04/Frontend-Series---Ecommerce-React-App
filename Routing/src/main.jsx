import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'


//Pages
import Home from './assets/Components/Home'
import About from './assets/Components/About'
import Contact from './assets/Components/Contact'
import Layout from './assets/Components/Layout'
import User from './assets/Components/User'


// const router = createBrowserRouter(
//   [
//     { 
//       path: '/',
//       element : <Layout />,
//       children : [
//         {
//           path : '',
//           element : <Home />
//         },
//         {
//           path : 'about',
//           element : <About />
//         },
//         {
//           path: 'contact',
//           element : <Contact />
//         }

//       ]
//   }
//   ]
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout />}>
      <Route path ='' element ={<Home/>} />
      <Route path ='About' element ={<About/>} />
      <Route path ='Contact' element ={<Contact/>} />
      <Route path ='User/:userid' element ={<User/>} />
    </Route>
  )
)





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
