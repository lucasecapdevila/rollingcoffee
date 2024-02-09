import { Link } from 'react-router-dom'
import imgError from '../../assets/error404.png'

const Error404 = () => {
  return (
    <main className='mainPage d-flex flex-column'>
      <img className='d-block mx-auto imgError' src={imgError} alt="error" />
      <Link to='/' className='btn btn-primary align-self-center'>Volver al inicio</Link>
    </main>
  )
}

export default Error404