import "./App.css";


import { createBrowserRouter, RouterProvider, ErrorResponse } from "react-router-dom";
import Home from "./pages/home";




export default function App(){

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home/>,
        errorElement: "ElementError",
  
      }
    ]
  )
  
  return(
    <>
    <RouterProvider router={router}/>
    </>
  )
}