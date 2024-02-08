import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Container, Table } from 'react-bootstrap'
import ItemProducto from './producto/ItemProducto'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { leerProductosAPI } from '../../helpers/queries'

const Administrador = () => {
  const [listaProductos, setListaProductos] = useState([])

  useEffect(() => {
    traerProductos()
  }, [])
  
  const traerProductos = async() => {
    try {
      await leerProductosAPI()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className='mainPage'>
      <Container>
        <div className='d-flex align-items-center justify-content-between'>
          <h1 className="display-3">Productos disponibles</h1>
          <Link to='/admin/crear' className='btn btn-primary'><FontAwesomeIcon icon={faPlus} /></Link>
        </div>
        <hr />

        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>URL de Imagen</th>
              <th>Categoría</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <ItemProducto />
            <ItemProducto />
            <ItemProducto />
          </tbody>
        </Table>
      </Container>
    </main>
  )
}

export default Administrador