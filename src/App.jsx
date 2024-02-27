import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BarraNavegacion from './components/common/BarraNavegacion'
import Footer from './components/common/Footer'
import Administrador from './components/pages/Administrador'
import Error404 from './components/pages/Error404'
import Inicio from './components/pages/Inicio'
import Login from './components/pages/login'
import DetalleProducto from './components/pages/DetalleProducto'

function App() {
  return (
    <BrowserRouter>
      <BarraNavegacion />
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>} />
        <Route exact path='/admin/*' element={<Administrador></Administrador>} />
        
        
        <Route exact path='/detalleProducto/:id' element={<DetalleProducto></DetalleProducto>} />
        <Route exact path='/login' element={<Login></Login>} />
        <Route path='*' element={<Error404></Error404>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
