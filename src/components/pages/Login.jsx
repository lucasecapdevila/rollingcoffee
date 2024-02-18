import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Container, Form } from 'react-bootstrap'

const Login = () => {
  const [form, setForm] = useState({
    correo: "",
    password: ""
  })

  //  Funciones
  const onUpdateField = (e) => {
    const nuevoFormState = {
      ...form,
      [e.target.name]: e.target.value
    }
    setForm(nuevoFormState)
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    console.log('Funcionando');
    alert(JSON.stringify(form, null, 2))
  }

  return (
    <main className='mainPage'>
      <Container>
        <Card>
          <CardHeader>
            <h1 className='h3 m-0'>Login</h1>
          </CardHeader>
          <CardBody>
            <Form onSubmit={onSubmitForm}>
              <Form.Group className="mb-3" controlId="correo">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email"
                  name="correo"
                  placeholder="ejemplo@mail.com"
                  value={form.email}
                  onChange={onUpdateField}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name='password'
                  placeholder="Contraseña"
                  value={form.password}
                  onChange={onUpdateField}
                />
              </Form.Group>
              <Button type='submit'>Ingresar</Button>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </main>
  )
}

export default Login