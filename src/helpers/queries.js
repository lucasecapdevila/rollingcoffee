const URI_PRODUCTOS = import.meta.env.VITE_API_PRODUCTOS

console.log(URI_PRODUCTOS);

//  Solicitud tipo GET (o Request) para el array de los productos
export const leerProductosAPI = async() => {
  try {
    const respuesta = await fetch(URI_PRODUCTOS)
    const listaProductos = await respuesta.json()
    return listaProductos;

  } catch (error) {
    console.log(error);
  }
}

//  Solicitud tipo GET (o Request) para un único producto
export const obtenerProductoAPI = async(id) => {
  try {
    const respuesta = await fetch(`${URI_PRODUCTOS}/${id}`)
    return respuesta;
  } catch (error) {
    console.log(error);
  }
}

//  Solicitud tipo POST (crear)
export const crearProductosAPI = async(productoNuevo) => {
  try {
    const respuesta = await fetch(URI_PRODUCTOS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(productoNuevo)
    })
    console.log(respuesta);
    return respuesta

  } catch (error) {
    console.log(error);
  }
}

//  Solicitud tipo DELETE (eliminar)
export const borrarProductosAPI = async(id) => {
  try {
    const respuesta = await fetch(`${URI_PRODUCTOS}/${id}`, {
      method: "DELETE",
    })
    console.log(respuesta);
    return respuesta

  } catch (error) {
    console.log(error);
  }
}

//  Solicitud tipo PUT (editar)
export const editarProductoAPI = async(id, producto) => {
  try {
    const respuesta = await fetch(`${URI_PRODUCTOS}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(producto)
    })
    return respuesta
  } catch (error) {
    console.log(error);
  }
}


//  Cuando tenga el backend, realizar una petición POST para el login

const admin = {
  email: "admin@rollingcode.com",
  password: "Rolling576"
}

export const login = (usuario) => {
  if(usuario.email === admin.email && usuario.password === admin.password){
    sessionStorage.setItem('inicioRollingCoffee', JSON.stringify(usuario.email))
    return true
  } else{
    return false
  }
}