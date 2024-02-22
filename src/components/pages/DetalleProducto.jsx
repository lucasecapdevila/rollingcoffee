import { Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from "react-bootstrap"
import { obtenerProductoAPI } from '../../helpers/queries'
import { useParams } from 'react-router'
import { useEffect, useState } from "react"

const DetalleProducto = () => {
  const [producto, setProducto] = useState({})

  useEffect(() => {
    cargarDatosDelProducto()
  }, [])

  //  Variables que traigo de react-router
  const {id} = useParams()

  const cargarDatosDelProducto = async() => {
    const respuesta = await obtenerProductoAPI(id)
    if(respuesta.status === 200){
      const datosProducto = await respuesta.json()
      setProducto(datosProducto)
    } else{
      Swal.fire({
        title: "Ocurrió un error",
        text: "Intente realizar esta operación en unos minutos.",
        icon: "error"
      });
    }
  }

  return (
    <Container className="my-2 mainPage">
      <Card>
        <Row>
          <Col md={6}>
            <CardImg
              variant="top"
              src={producto.imagen}
              alt={producto.nombreProducto}
            />
          </Col>
          <Col md={6}>
            <CardBody>
              <CardTitle>{producto.nombreProducto}</CardTitle>
              <hr />
              <CardText>
              {producto.descripcionAmplia}
                <br />
                <br />
                <span className='fw-bold text-green'>Categoría: </span>{producto.categoria}
                <br className='mb-3' />
                <span className='fw-bold text-green'>Precio: </span>${producto.precio}
              </CardText>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default DetalleProducto