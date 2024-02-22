import { Button } from 'react-bootstrap'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'
import { borrarProductosAPI, leerProductosAPI } from '../../../helpers/queries'
import { Link } from 'react-router-dom'


const ItemProducto = ({producto, setListaProductos}) => {
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
          //  Actualizo la tabla
          const productosActualizados = await leerProductosAPI()
          setListaProductos(productosActualizados)
          
          Swal.fire({
            title: "Eliminado!",
            text: `El producto "${producto.nombreProducto}" se eliminó exitosamente.`,
            icon: "success"
          });
        } else{
          Swal.fire({
            title: "Ocurrió un error",
            text: `No se pudo eliminar el producto ${producto.nombreProducto}. Vuelva a intentarlo en unos momentos.`,
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
      <td>${producto.precio}</td>
      <td className='w-25'><img src={producto.imagen} className='img-fluid' /></td>
      <td>{producto.categoria}</td>
      <td>
        <div className='d-flex align-items-center justify-content-center'>
          <Link className='btn btn-warning me-2' to={`/admin/editar/${producto.id}`}><FontAwesomeIcon icon={faPenToSquare} /></Link>
          <Button variant='danger' onClick={borrarProducto}><FontAwesomeIcon icon={faTrashCan} /></Button>
        </div>
      </td>
    </tr>
  )
}

export default ItemProducto