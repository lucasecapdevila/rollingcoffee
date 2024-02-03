import producto from '../../assets/coffee-producto.jpg'
import { Button, Card, CardBody, CardFooter, CardHeader, CardImg, CardText, CardTitle } from 'react-bootstrap'

const CardProducto = () => {
  return (
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
        <Button variant='success' className='align-self-end'>Ver más</Button>
      </CardFooter>
    </Card>
  )
}

export default CardProducto