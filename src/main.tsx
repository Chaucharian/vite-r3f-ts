import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard, Home, Hyper, Funzionalita, Uso, Model, QrCode, Bye } from './pages'
import './styles/main.css'

const App = () => {
  const toggleFullScreen = () => {
    if (!window.document.fullscreenElement) {
      window.document.body.requestFullscreen()
    }
  }

  const handleUserKeyPress = (event: any) => {
    const { key } = event
    if (key === 'f') {
      toggleFullScreen()
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress)
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress)
    }
  }, [handleUserKeyPress])

  return (
    <BrowserRouter basename='vite-r3f-ts'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='hyper' element={<Hyper />} />
        <Route path='funzionalita' element={<Funzionalita />} />
        <Route path='uso' element={<Uso />} />
        <Route path='3d' element={<Model />} />
        <Route path='qr' element={<QrCode />} />
        <Route path='bye' element={<Bye />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
