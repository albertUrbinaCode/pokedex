import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import PokeInfo from './components/PokeInfo'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/pokedex/:id' element={<PokeInfo/>}/>
        </Route>  
      </Routes>
    </div>
  )
}

export default App
