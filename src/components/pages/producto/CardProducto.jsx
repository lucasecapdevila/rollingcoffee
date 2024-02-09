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
          <CardTitle>Café con leche</CardTitle>
          <CardText>El café con leche es una popular bebida caliente que combina café y leche en proporciones variables según los gustos individuales. Se prepara tradicionalmente vertiendo café recién hecho en una taza y luego agregando leche caliente, creando así una mezcla equilibrada de sabor y textura.</CardText>
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