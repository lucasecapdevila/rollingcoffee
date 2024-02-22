import { Route, Routes } from "react-router-dom"
import Administrador from "../pages/Administrador"
import FormularioProducto from "../pages/producto/FormularioProducto"

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route exact path='/admin' element={<Administrador></Administrador>} />
        <Route exact path='/admin/crear' element={<FormularioProducto editar={false} titulo='Nuevo producto'></FormularioProducto>} />
        <Route exact path='/admin/editar/:id' element={<FormularioProducto editar={true} titulo='Editar producto'></FormularioProducto>} />
      </Routes>
    </>
  )
}

export default RutasAdmin