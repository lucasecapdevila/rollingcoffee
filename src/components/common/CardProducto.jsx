import producto from '../../assets/coffee-producto.jpg'
import { Card, CardImg } from 'react-bootstrap'

const CardProducto = () => {
  return (
    <Card>
      <CardImg className='img-fluid' src={producto} alt='café con leche' />
    </Card>
  )
}

export default CardProducto