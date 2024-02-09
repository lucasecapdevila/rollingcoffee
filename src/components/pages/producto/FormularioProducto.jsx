import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form"


const FormularioProducto = () => {
  const {register, handleSubmit, formState: { errors }} = useForm()

  const productoValidado = (producto) => {
    console.log(producto);
  }

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(productoValidado)} className="my-4" >
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto*</Form.Label>
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
            }
          />
          <Form.Text className="text-danger">{errors.nombreProducto?.message}</Form.Text>
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            // {
            //   ...register("precio")
            // }
          />
          <Form.Text className="text-danger">
            prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            // {
            //   ...register("imagen")
            // }
          />
          <Form.Text className="text-danger">
        prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select required>
            <option value="">Seleccione una opcion</option>
            <option value="Infusiones">Infusiones</option>
            <option value="Batidos">Batidos</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
          prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una taza de café suave y aromático."
            as="textarea"
          />
          <Form.Text className="text-danger">
        prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: El café americano es una bebida caliente que consiste en un espresso diluido con agua caliente, lo que resulta en una taza de café suave y aromático. Es una opción popular para aquellos que prefieren un café menos intenso que el espresso tradicional. Perfecto para disfrutar en cualquier momento del día."
            as="textarea"
          />
          <Form.Text className="text-danger">
        prueba de error
          </Form.Text>
        </Form.Group>
        
        <Button type="submit" variant='success'>
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioProducto;