import { Button } from 'react-bootstrap'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ItemProducto = ({producto}) => {
  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td>{producto.precio}</td>
      <td className='w-25'><img src={producto.imagen} className='img-fluid' /></td>
      <td>{producto.categoria}</td>
      <td>
        <div className='d-flex align-items-center justify-content-center'>
          <Button variant='warning' className='me-2'><FontAwesomeIcon icon={faPenToSquare} /></Button>
          <Button variant='danger'><FontAwesomeIcon icon={faTrashCan} /></Button>
        </div>
      </td>
    </tr>
  )
}

export default ItemProducto