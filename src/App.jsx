import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BarraNavegacion from './components/common/BarraNavegacion'
import Footer from './components/common/Footer'
import Administrador from './components/pages/Administrador'
import Error404 from './components/pages/Error404'
import Inicio from './components/pages/Inicio'
import DetalleProducto from './components/pages/producto/DetalleProducto'

function App() {
  return (
    <BrowserRouter>
      <BarraNavegacion />
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>} />
        <Route exact path='/admin' element={<Administrador></Administrador>} />
        <Route exact path='/admin/crear' element={<Administrador></Administrador>} />
        <Route exact path='/admin/editar' element={<Administrador></Administrador>} />
        <Route exact path='/detalle' element={<DetalleProducto></DetalleProducto>} />
        <Route path='*' element={<Error404></Error404>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
