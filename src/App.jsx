import { Children, useState } from 'react'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import ShoesPage from './compenents/ShoesPage'
import  HomePage  from './compenents/homePage'
import NewArrivals  from './compenents/NewArrivals'
import AboutUs  from './compenents/aboutUs'
import CardPage  from './compenents/CardPage'
import { RootLayout } from './compenents/root'
import './compenents/components.css'
import './App.css'

const router = createBrowserRouter  ([
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
        path:"/NewArrivals",
        element:<NewArrivals/>
      },
      {
        path:"/aboutUs",
        element:<AboutUs/>
      },
      {
        path:"./compenents/CardPage",
        element:<CardPage/>
      },
    ]
  },
])

  
function App() {
  return (
    <>

      <RouterProvider router={router}/>
      </>
  )
}

export default App;