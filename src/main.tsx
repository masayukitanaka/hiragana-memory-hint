import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import OneByOne from './pages/OneByOne.tsx'
import Random from './pages/Random.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/one-by-one" element={<OneByOne />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
