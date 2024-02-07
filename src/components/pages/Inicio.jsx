import { Container, Row } from 'react-bootstrap'
import cafeteria from '../../assets/coffee-shop.jpg'
import CardProducto from './producto/CardProducto'

const Inicio = () => {
  return (
    <main className='mainPage'>
      <img className='img-fluid' src={cafeteria} alt='nuestra cafetería' />
      <Container className='mt-4'>
      <h1 className='display-3'>Nuestros productos</h1>
        <Row>
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
        </Row>
      </Container>
    </main>
  )
}

export default Inicio