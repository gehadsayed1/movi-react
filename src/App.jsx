
import React from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Layuot from './component/layout/Layuot'
import Home from './component/Home/Home'
import Tvpage from './component/tvpage/Tvpage'
import Movie from './component/movie/Movie'
import Details from './component/details/Details'
import { Offline } from 'react-detect-offline'
import Error from './component/erorr/Error'
export default function App() {
  let router = createHashRouter([{
    path: "/", element: <Layuot />, children: [
      { index: true, element: <Home /> },
      { path: "Home", element: <Home/> },
      { path: "Tvpage", element: <Tvpage /> },
      { path: "Movie", element: <Movie /> },
      { path: "Details/:type/:id", element: <Details /> },
      { path: "*", element: <Error/> },
    ]

  }])



  return <>
    <RouterProvider router={router} />
    <>
  
      <Offline><div className=' position-fixed  start-0 bottom-0' >
      suprise you are offline  <i className=' fa fa-wifi'></i>
      </div></Offline>
  </>
  </>
   
}
