import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Container, Form, FormText } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { login } from '../../helpers/queries'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Login = ({setLoggedUser}) => {
  const navegacion = useNavigate()

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm()

  //  Funciones
  
  const onSubmit = (usuario) => {
    console.log(usuario);
    if(login(usuario)){
      //  Usuario logueado
      Swal.fire({
        title: "Usuario logueado",
        text: `El usuario ${usuario.email} fue ingresado correctamente.`,
        icon: "success",
      });
      //  Almacenar el usuario logueado en el state
      setLoggedUser(usuario.email)

      //  Redireccionar a página de Administrador
      navegacion('/admin')
    } else{
      //  El usuario no fue logueado
      Swal.fire({
        title: "Error en el login",
        text: "El correo o contraseña son incorrectos",
        icon: "error",
      });
    }
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
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email"
                  name="email"
                  placeholder="ejemplo@mail.com"
                  {...register("email", {
                    required: "El email es obligatorio.",
                  minLength: {
                    value: 4,
                    message: "El email debe contener al menos 4 caracteres",
                  },
                  maxLength: {
                    value: 250,
                    message: "El email debe contener como máximo 250 caracteres",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    message: "Ingrese una dirección de correo electrónico válida",
                  },})}
                />
                <FormText className='text-danger'>{errors.email?.message}</FormText>
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name='password'
                  placeholder="Ingrese su contraseña"
                  {...register("password", {
                    required: "La contraseña es obligatoria.",
                    minLength: { value: 8, message: "el minimo es de 8 caracteres" },
                    maxLength: {
                      value: 20,
                      message: "el maximo es de 20 carácteres",
                    },
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,
                      message: "El password debe contener al menos una letra mayúscula, una letra minúscula y un número",
                  },})}
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