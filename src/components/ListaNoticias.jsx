import { Row, Container, Spinner } from "react-bootstrap";
import Buscador from "./Buscador";
import Noticia from "./Noticia";
import { useEffect, useState } from "react";

const ListaNoticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [mostrarSpinner, setMostrarSpinner] = useState(true);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  const APIkey = "pub_2420662465ebc1a70595767e75a4fe5382b1a";
  let url = `https://newsdata.io/api/1/news?apikey=${APIkey}&country=ar&language=es`;

  useEffect(() => {
    consultarAPI();
  }, [categoriaSeleccionada]);

  const consultarAPI = async () => {
    try {
      setMostrarSpinner(true);
      if (categoriaSeleccionada) {
        url += `&category=${categoriaSeleccionada}`;
      }
      const respuesta = await fetch(url);
      const dato = await respuesta.json();
      setNoticias(dato.results);
      setMostrarSpinner(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoria = (e) => {
    const categoriaSeleccionada = e.target.value;
    setCategoriaSeleccionada(categoriaSeleccionada);
  };

  const componenteRenderizado = mostrarSpinner ? (
    <Container className="my-5 text-center">
      <Spinner animation="border" variante="primary"></Spinner>
    </Container>
  ) : (
    <Container className="py-3">
      <Row className="g-3">
        {noticias.map((noticia, index) => (
          <Noticia
            key={index}
            title={noticia.title}
            category={noticia.category}
            description={noticia.description}
            image_url={noticia.image_url}
            link={noticia.link}
          />
        ))}
      </Row>
    </Container>
  );
  return (
    <>
      <Container className="py-3">
        <Buscador handleCategoria={handleCategoria} categoria={categoriaSeleccionada}></Buscador>
      </Container>
      {componenteRenderizado}
    </>
  );
};

export default ListaNoticias;
