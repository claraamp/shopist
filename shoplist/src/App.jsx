import React from 'react'
import { useState } from 'react'
import './App.css'
import Login from "./pages/Login/Login"
import Inicio from './pages/Inicio/Inicio'
import Search from './Components/SearchList/Search'
import PoupUp from './Components/Popup/Popup.jsx'
import { GlobalStyle } from './GlobalStyle/GlobalStyle'

export default function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Inicio />
      
    </div>
  )
}
