import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/Coffee_Logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

const BarraNavegacion = ({ loggedUser, setLoggedUser }) => {
  const navegacion = useNavigate()

  const logout = () => {
    //  Resetear el sessionStorage
    sessionStorage.removeItem('inicioRollingCoffee')
    //  Resetear el state
    setLoggedUser('')
    //  Redireccionar al inicio
    navegacion('/')
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            className="img-fluid "
            width={200}
            src={logo}
            alt="logo de la cafetería"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-link" to="/">
              Inicio
            </NavLink>
            <NavLink end className="nav-link" to="/admin">
              Administrador
            </NavLink>
            {loggedUser.length > 0 ? (
              <Button variant="link" className="nav-link" onClick={logout}>Logout</Button>
            ) : (
              <NavLink end className="nav-link" to="/login">
                Login
              </NavLink>
            )}
            <NavLink end className="nav-link" to="/registro">
              Registro
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BarraNavegacion;
