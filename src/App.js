import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from './components/Cadastro'
import ListaVagas from './components/ListaVagas'



const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
          <Route element={<Cadastro/> } path="/"/>
          <Route element={<Cadastro/>} path="/Cadastro"/>
          <Route element={<ListaVagas/>} path="/ListaVagas"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App