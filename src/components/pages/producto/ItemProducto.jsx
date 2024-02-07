import { Button } from 'react-bootstrap'
import producto from '../../../assets/coffee-producto.jpg'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ItemProducto = () => {
  return (
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
  )
}

export default ItemProducto