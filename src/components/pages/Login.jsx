import React from 'react'
import { Button, Card, CardBody, CardHeader, Container, Form } from 'react-bootstrap'

const Login = () => {
  return (
    <main className='mainPage'>
      <Container>
        <Card>
          <CardHeader>
            <h1 className='h3 m-0'>Login</h1>
          </CardHeader>
          <CardBody>
            <Form>
              <Form.Group className="mb-3" controlId="correo">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="ejemplo@mail.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              <Button>Ingresar</Button>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </main>
  )
}

export default Login