import React from 'react'
import { Home } from './pages/home'
import { SeeDetail } from './pages/SeeDetail'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/:username' element={<SeeDetail />}/>
    </Routes>
    </BrowserRouter>
  )
}
