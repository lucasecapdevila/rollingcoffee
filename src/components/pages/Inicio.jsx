import { Container, Row } from 'react-bootstrap'
import cafeteria from '../../assets/coffee-shop.jpg'
import CardProducto from './producto/CardProducto'
import { useEffect, useState } from 'react'
import { leerProductosAPI, obtenerProductoAPI } from '../../helpers/queries'

const Inicio = () => {
  const [listaProductos, setListaProductos] = useState([])

  useEffect(() => {
    traerProductos()
  }, [])

  const traerProductos = async() => {
    try {
      const listaProductosAPI = await leerProductosAPI()
      setListaProductos(listaProductosAPI)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className='mainPage'>
      <img className='img-fluid' src={cafeteria} alt='Nuestra cafetería' />
      <Container className='mt-4'>
      <h1 className='display-3'>Nuestros productos</h1>
        <Row>
          {
            listaProductos.map((producto) => <CardProducto key={producto.id} producto={producto} />)
          }
        </Row>
      </Container>
    </main>
  )
}

export default Inicio