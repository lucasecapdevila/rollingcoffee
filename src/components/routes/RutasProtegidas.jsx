import { Navigate } from "react-router-dom"

const RutasProtegidas = ({children}) => {
  //  Agrego la lógica que quiero que ocurra para considerar si soy admin o no 
  const admin = JSON.parse(sessionStorage.getItem('inicioRollingCoffee')) || null
  //  Quiero saber si no es el admin
  if(!admin){
    //  Si no es el admin, lo redirecciono al login
    return <Navigate to='/login'></Navigate>
  } else{
    //  Si es el admin, le muestro las rutas que puede seguir
    return children
  }
}

export default RutasProtegidas