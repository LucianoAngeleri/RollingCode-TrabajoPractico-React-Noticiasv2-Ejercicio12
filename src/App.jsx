import './App.css'
import "bootstrap/dist/css/bootstrap.css";
import { Container } from 'react-bootstrap'; 
import Encabezado from "./components/Encabezado"
import ListaNoticias from "./components/ListaNoticias"

function App() {
  return (
    <>
    <Encabezado></Encabezado>
    <ListaNoticias></ListaNoticias>
    <Container fluid className="text-center text-bg-dark py-4">
      <footer>
        <p>&copy; Todos los derechos reservados.</p>
      </footer>
    </Container>
    </>
  )
}

export default App
