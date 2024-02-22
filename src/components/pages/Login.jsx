import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Container, Form, FormText } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm()

  //  Funciones
  
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <main className='mainPage'>
      <Container>
        <Card className='my-5'>
          <CardHeader>
            <h1 className='h3 m-0'>Login</h1>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="correo">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email"
                  name="correo"
                  placeholder="ejemplo@mail.com"
                  {...register("correo", {
                    required: "El correo es obligatorio."
                  })}
                />
                <FormText className='text-danger'>{errors.correo?.message}</FormText>
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name='password'
                  placeholder="Ingrese su contraseña"
                  {...register("password", {
                    required: "La contraseña es obligatoria."
                  })}
                />
                <FormText className='text-danger'>{errors.password?.message}</FormText>
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