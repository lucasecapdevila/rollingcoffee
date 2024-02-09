import producto from '../../assets/coffee-producto.jpg'
import { Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from "react-bootstrap"


const DetalleProducto = () => {
  return (
    <Container className="my-2 mainPage">
      <Card>
        <Row>
          <Col md={6}>
            <CardImg src={producto} />
          </Col>
          <Col md={6}>
            <CardBody>
              <CardTitle>Café con leche</CardTitle>
              <hr />
              <CardText>
                El café con leche es una popular bebida caliente que combina café y leche en proporciones variables según los gustos individuales. Se prepara tradicionalmente vertiendo café recién hecho en una taza y luego agregando leche caliente, creando así una mezcla equilibrada de sabor y textura.
                <br />
                <br />
                <span className='fw-bold text-green'>Categoría: </span>Infusiones
                <br className='mb-3' />
                <span className='fw-bold text-green'>Precio: </span>$1.000
              </CardText>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default DetalleProducto