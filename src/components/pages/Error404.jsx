import { Button } from 'react-bootstrap'
import imgError from '../../assets/error404.png'

const Error404 = () => {
  return (
    <main className='mainPage d-flex flex-column'>
      <img className='d-block mx-auto imgError' src={imgError} alt="error" />
      <Button className='align-self-center'>Volver al inicio</Button>
    </main>
  )
}

export default Error404