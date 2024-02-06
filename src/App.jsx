import './App.css'
import BarraNavegacion from './components/common/BarraNavegacion'
import Footer from './components/common/Footer'
import Administrador from './components/pages/Administrador'
import Error404 from './components/pages/Error404'
import Inicio from './components/pages/Inicio'

function App() {
  return (
    <>
      <BarraNavegacion />
      {/* <Inicio /> */}
      <Administrador />
      {/* <Error404 /> */}
      <Footer />
    </>
  )
}

export default App
