import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button, Container } from 'react-bootstrap'

const Administrador = () => {
  return (
    <main className='mainPage'>
      <Container>
        <div className='d-flex align-items-center justify-content-between'>
          <h2 className="display-3">Productos disponibles</h2>
          <Button className=''><FontAwesomeIcon icon={faPlus} /></Button>
        </div>
      </Container>
    </main>
  )
}

export default Administrador