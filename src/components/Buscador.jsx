import { Form, Container } from "react-bootstrap"
const Buscador = ({ categoria, handleCategoria }) => {

    return (
        <Container className="py-3">
          <Form>
            <Form.Group className="mb-3" controlId="selectorCategoria">
              <Form.Label>Buscar por Categoría</Form.Label>
              <Form.Select value={categoria} onChange={handleCategoria}>
                <option>Selecciona una opción...</option>
                <option value="business">Negocios</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="environment">Medio ambiente</option>
                <option value="food">Alimentación</option>
                <option value="health">Salud</option>
                <option value="politics">Política</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="technology">Tecnología</option>
                <option value="top">Principales</option>
                <option value="tourism">Turismo</option>
                <option value="world">Mundo</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Container>
      );
    };

export default Buscador;