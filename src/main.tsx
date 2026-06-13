import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import OneByOne from './pages/OneByOne.tsx'
import Random from './pages/Random.tsx'
import Custom from './pages/Custom.tsx'
import KOneByOne from './pages/KOneByOne.tsx'
import KRandom from './pages/KRandom.tsx'
import KCustom from './pages/KCustom.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/one-by-one" element={<OneByOne />} />
        <Route path="/random" element={<Random />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/k_one_by_one" element={<KOneByOne />} />
        <Route path="/k_random" element={<KRandom />} />
        <Route path="/k_custom" element={<KCustom />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
