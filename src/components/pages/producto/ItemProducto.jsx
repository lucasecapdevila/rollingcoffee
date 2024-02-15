import { Button } from 'react-bootstrap'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'
import { borrarProductosAPI } from '../../../helpers/queries'


const ItemProducto = ({producto}) => {
  const borrarProducto = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar el producto?",
      text: "No podrás revertir este proceso.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar"
    }).then(async(result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarProductosAPI(producto.id)
        if(respuesta.status === 200){
          Swal.fire({
            title: "Eliminado!",
            text: `El producto "${producto.nombreProducto}" se eliminó exitosamente.`,
            icon: "success"
          });
          
          //  Hay que actualizar la tabla
        } else{
          Swal.fire({
            title: "Ocurrió un error",
            text: "No se pudo eliminar el producto.",
            icon: "error"
          });
        }
      }
    });
  }

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
          <Button variant='danger' onClick={borrarProducto}><FontAwesomeIcon icon={faTrashCan} /></Button>
        </div>
      </td>
    </tr>
  )
}

export default ItemProducto