import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Table } from 'react-bootstrap'
import producto from '../../assets/coffee-producto.jpg'

const Administrador = () => {
  return (
    <main className='mainPage'>
      <Container>
        <div className='d-flex align-items-center justify-content-between'>
          <h2 className="display-3">Productos disponibles</h2>
          <Button className=''><FontAwesomeIcon icon={faPlus} /></Button>
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
            <tr>
              <td>1</td>
              <td>Café americano</td>
              <td>$250</td>
              <td className='w-25'><img src={producto} className='img-fluid' /></td>
              <td>Bebida caliente</td>
              <td>
                <div className='d-flex align-items-center justify-content-center'>
                  <Button variant='warning' className='me-2'><FontAwesomeIcon icon={faPenToSquare} /></Button>
                  <Button variant='danger'><FontAwesomeIcon icon={faTrashCan} /></Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Capuchino</td>
              <td>$350</td>
              <td className='w-25'><img src={producto} className='img-fluid' /></td>
              <td>Bebida caliente</td>
              <td>
                <div className='d-flex align-items-center justify-content-center'>
                  <Button variant='warning' className='me-2'><FontAwesomeIcon icon={faPenToSquare} /></Button>
                  <Button variant='danger'><FontAwesomeIcon icon={faTrashCan} /></Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Croissant de chocolate</td>
              <td className='me-0'>$180</td>
              <td className='w-25'><img src={producto} className='img-fluid' /></td>
              <td>Repostería</td>
              <td>
                <div className='d-flex align-items-center justify-content-center'>
                  <Button variant='warning' className='me-2'><FontAwesomeIcon icon={faPenToSquare} /></Button>
                  <Button variant='danger'><FontAwesomeIcon icon={faTrashCan} /></Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Té verde</td>
              <td>$200</td>
              <td className='w-25'><img src={producto} className='img-fluid' /></td>
              <td>Bebida caliente</td>
              <td>
                <div className='d-flex align-items-center justify-content-center'>
                  <Button variant='warning' className='me-2'><FontAwesomeIcon icon={faPenToSquare} /></Button>
                  <Button variant='danger'><FontAwesomeIcon icon={faTrashCan} /></Button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </main>
  )
}

export default Administrador