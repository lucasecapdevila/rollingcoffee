import './App.css'
import BarraNavegacion from './components/common/BarraNavegacion'
import Footer from './components/common/Footer'
import Error404 from './components/pages/Error404'
import Inicio from './components/pages/Inicio'

function App() {
  return (
    <>
      <BarraNavegacion />
      <Error404 />
      <Footer />
    </>
  )
}

export default App
