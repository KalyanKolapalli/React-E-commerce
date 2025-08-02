import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import Home from './Home'
import "./App.css"
function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>


      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default  App