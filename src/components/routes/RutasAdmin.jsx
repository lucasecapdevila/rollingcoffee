import { Route, Routes } from "react-router-dom"
import Administrador from "../pages/Administrador"
import FormularioProducto from "../pages/producto/FormularioProducto"

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Administrador></Administrador>} />
        <Route exact path='/crear' element={<FormularioProducto editar={false} titulo='Nuevo producto'></FormularioProducto>} />
        <Route exact path='/editar/:id' element={<FormularioProducto editar={true} titulo='Editar producto'></FormularioProducto>} />
      </Routes>
    </>
  )
}

export default RutasAdmin