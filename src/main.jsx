
import { createRoot } from 'react-dom/client'
import './index.css'
import PagePerfil from './pages/PagePerfil.jsx'
import PageHome from './pages/PageHome.jsx'
import PageConta from './pages/PageConta.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PagePerfil/>}/>
      <Route path='/home' element={<PageHome/>}/>
      <Route path='/conta' element={<PageConta/>}/>
    </Routes>
  </BrowserRouter>

)
