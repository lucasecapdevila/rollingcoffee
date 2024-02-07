import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Table } from 'react-bootstrap'
import ItemProducto from './producto/ItemProducto'

const Administrador = () => {
  return (
    <main className='mainPage'>
      <Container>
        <div className='d-flex align-items-center justify-content-between'>
          <h1 className="display-3">Productos disponibles</h1>
          <Button><FontAwesomeIcon icon={faPlus} /></Button>
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