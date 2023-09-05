

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { App } from './App'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

export function Navigations() {
  return (
    <BrowserRouter>
        <Routes>
            
            <Route path="/" element={<App />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/home" element={<Home />} />
            
            <Route path="*" element={<div>404</div>} />

        </Routes>

    </BrowserRouter>
  )
}
