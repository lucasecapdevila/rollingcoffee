import { Link } from 'react-router-dom'
import producto from '../../../assets/coffee-producto.jpg'
import { Card, CardBody, CardFooter, CardHeader, CardImg, CardText, CardTitle, Col } from 'react-bootstrap'

const CardProducto = () => {
  return (
    <Col xs={12} sm={6} md={4} className='my-2'>
      <Card className='px-0'>
        <CardHeader className='p-0'>
          <CardImg className='img-fluid' src={producto} alt='café con leche' />
        </CardHeader>
        <CardBody>
          <CardTitle>Café</CardTitle>
          <CardText>Descripción: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nostrum sint ex praesentium voluptates itaque.</CardText>
          <CardText><b>Precio: $250</b></CardText>
        </CardBody>
        <CardFooter className='d-flex flex-column'>
          <Link to='/detalle' className='btn btn-success align-self-end'>Ver más</Link>
        </CardFooter>
      </Card>
    </Col>
  )
}

export default CardProducto