import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form"
import { crearProductosAPI, editarProductoAPI, obtenerProductoAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


const FormularioProducto = ({editar, titulo}) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm()

  //  Variables que traigo de react-router
  const {id} = useParams()
  const navegacion = useNavigate()

  useEffect(()=>{
    //  Solo si estoy editando
    if(editar){
      cargarDatosFormulario()
    }
  }, [])

  const cargarDatosFormulario = async () => {
    const respuesta = await obtenerProductoAPI(id)
    if(respuesta.status === 200){
      const productoBuscado = await respuesta.json()
      //  Cargar los datos del productoBuscado en el formulario
      setValue('nombreProducto', productoBuscado.nombreProducto)
      setValue('precio', productoBuscado.precio)
      setValue('categoria', productoBuscado.categoria)
      setValue('descripcionBreve', productoBuscado.descripcionBreve)
      setValue('descripcionAmplia', productoBuscado.descripcionAmplia)
      setValue('imagen', productoBuscado.imagen)
    } else{
      Swal.fire({
        title: "Ocurrió un error",
        text: "Intente realizar esta operación en unos minutos.",
        icon: "error"
      });
    }
  }

  const productoValidado = async(producto) => {
    try {
      if(editar){
        //  Lógica del Submit para editar un producto con la API
        const respuesta = await editarProductoAPI(id, producto)
        if(respuesta.status === 200){
          Swal.fire({
            title: "Producto editado",
            text: `El producto: ${producto.nombreProducto} fue modificado exitosamente.`,
            icon: "success"
          });
          //  Redireccionar a tabla de Administrador una vez terminada la edición
          navegacion('/admin')
  
        } else{
          Swal.fire({
            title: "Ocurrió un error",
            text: "Intente modificar el producto en unos minutos.",
            icon: "error"
          });
        }
      } else{
        //  Lógica de CREAR PRODUCTO
        const respuesta = await crearProductosAPI(producto);
        if(respuesta.status === 201){
          //  Mensaje para el usuario con SweetAlert
          Swal.fire({
            title: "Producto creado",
            text: `El producto: ${producto.nombreProducto} fue creado exitosamente.`,
            icon: "success"
          });
          reset();
        } else{
          Swal.fire({
            title: "Ocurrió un error",
            text: "Intente crear el producto en unos minutos.",
            icon: "error"
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="container mainPage">
      <h1 className="display-4 mt-5">{titulo}</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(productoValidado)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto<span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {
              ...register("nombreProducto",{
                required: 'El nombre del producto es obligatorio.',
                minLength:{
                  value: 2,
                  message: 'Debe ingresar como mínimo 2 carácteres para el nombre del producto.'
                },
                maxLength:{
                  value: 50,
                  message: 'Debe ingresar como máximo 50 carácteres para el nombre del producto.'
                }
              })
            }/>
          <Form.Text className="text-danger">{errors.nombreProducto?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio<span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {
              ...register("precio",{
                required: 'El precio del producto es obligatorio.',
                valueAsNumber: true,
                min:{
                  value: 50,
                  message: 'Debe ingresar un valor superior a 10.'
                },
                max:{
                  value: 10000,
                  message: 'Debe ingresar un valor inferior a 5000.'
                }
              })
            }/>
          <Form.Text className="text-danger">{errors.precio?.message}</Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL<span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {
              ...register("imagen",{
                required:'La URL de la imagen del producto es obligatoria.',
                pattern:{
                  value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                  message: 'La URL ingresada debe ser una imagen de formato .jpg, .jpeg, .png o .gif.'
                }
              })
            }/>
          <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoría<span className="text-danger">*</span></Form.Label>
          <Form.Select 
            {
              ...register("categoria",{
                required:'La categoría del producto es obligatoria.'
              })
            }
          >
            <option value="">Seleccione una opcion</option>
            <option value="Infusiones">Infusiones</option>
            <option value="Batidos">Batidos</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescripcionBreve">
          <Form.Label>Descripción breve<span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una taza de café suave y aromático."
            as="textarea"
            {
              ...register("descripcionBreve",{
                required:'La descripción breve del producto es obligatoria.',
                minLength:{
                  value: 10,
                  message: 'Debe ingresar como mínimo 10 carácteres para la descripción del producto.'
                },
                maxLength:{
                  value: 80,
                  message: 'Debe ingresar como máximo 80 carácteres para la descripción del producto.'
                }
              })
            }
          />
          <Form.Text className="text-danger">{errors.descripcionBreve?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcionAmplia">
          <Form.Label>Descripción Amplia<span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: El café americano es una bebida caliente que consiste en un espresso diluido con agua caliente, lo que resulta en una taza de café suave y aromático. Es una opción popular para aquellos que prefieren un café menos intenso que el espresso tradicional. Perfecto para disfrutar en cualquier momento del día."
            as="textarea"
            {
              ...register("descripcionAmplia",{
                required:'La descripción amplia del producto es obligatoria.',
                minLength:{
                  value: 20,
                  message: 'Debe ingresar como mínimo 20 carácteres para la descripción del producto.'
                },
                maxLength:{
                  value: 500,
                  message: 'Debe ingresar como máximo 500 carácteres para la descripción del producto.'
                }
              })
            }/>
          <Form.Text className="text-danger">{errors.descripcionAmplia?.message}</Form.Text>
        </Form.Group>
        
        <Button type="submit" variant='success'>Guardar</Button>
      </Form>
    </section>
  );
};

export default FormularioProducto;