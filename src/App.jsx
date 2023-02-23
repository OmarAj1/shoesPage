import { Children, useState } from 'react'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import ShoesPage from './compenents/ShoesPage'
import  HomePage  from './compenents/homePage'
import NewArrivals  from './compenents/NewArrivals'
import AboutUs  from './compenents/aboutUs'
import { RootLayout } from './compenents/root'

import './App.css'


const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout/>,
    children:[
      {
        path:"/",
        element: <HomePage/>
      },
      {
        path:"/ShoesPage",
        element:<ShoesPage/>
      },
      {
        path:"/newArrivals",
        element:<NewArrivals/>
      },
      {
        path:"/aboutUs",
        element:<AboutUs/>
      },
    ]
  },
])
  
function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App