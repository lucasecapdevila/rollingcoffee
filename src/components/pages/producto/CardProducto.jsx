import { Link } from 'react-router-dom'
import { Card, CardBody, CardFooter, CardHeader, CardImg, CardText, CardTitle, Col } from 'react-bootstrap'

const CardProducto = ({producto}) => {
  return (
    <Col xs={12} sm={6} md={4} className='my-2'>
      <Card className='px-0'>
        <CardHeader className='p-0'>
          <CardImg className='card-img-top-nueva' src={producto.imagen} alt={producto.nombreProducto} />
        </CardHeader>
        <CardBody>
          <CardTitle>{producto.nombreProducto}</CardTitle>
          <CardText>
            {producto.descripcionBreve}
            <br />
            <b>${producto.precio}</b>
          </CardText>
        </CardBody>
        <CardFooter className='d-flex flex-column'>
          <Link to= {`/detalleProducto/${producto._id}`} className='btn btn-success align-self-end'>Ver más</Link>
        </CardFooter>
      </Card>
    </Col>
  )
}

export default CardProducto