import { Container, Row } from 'react-bootstrap'
import cafeteria from '../../assets/coffee-shop.jpg'
import CardProducto from '../common/CardProducto'

const Inicio = () => {
  return (
    <main className='mainPage'>
      <img className='img-fluid' src={cafeteria} alt='nuestra cafetería' />
      <Container className='mt-5'>
        <Row>
          <CardProducto />
        </Row>
      </Container>
    </main>
  )
}

export default Inicio