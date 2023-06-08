import { Row, Container, Spinner } from "react-bootstrap";
import Buscador from "./Buscador";
import Noticia from "./Noticia";
import { useEffect, useState } from "react";

const ListaNoticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [mostrarSpinner, setMostrarSpinner] = useState(true);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [paisSeleccionado, setPaisSeleccionado] = useState("");

  const APIkey = "pub_2420662465ebc1a70595767e75a4fe5382b1a";
  let url = `https://newsdata.io/api/1/news?apikey=${APIkey}&language=es`;

  useEffect(() => {
    consultarAPI();
  }, [categoriaSeleccionada,paisSeleccionado]);

  const consultarAPI = async () => {
    try {
      setMostrarSpinner(true);
      if (categoriaSeleccionada) {
        url += `&category=${categoriaSeleccionada}`;
      }
      if (paisSeleccionado) {
        url += `&country=${paisSeleccionado}`;
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
  const handlePais = (e) => {
    const paisSeleccionado = e.target.value;
    setPaisSeleccionado(paisSeleccionado);
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
            pais={noticia.country}
          />
        ))}
      </Row>
    </Container>
  );
  return (
    <>
      <Container className="py-3">
        <Buscador handleCategoria={handleCategoria} handlePais={handlePais} categoria={categoriaSeleccionada} pais={paisSeleccionado}></Buscador>
      </Container>
      {componenteRenderizado}
    </>
  );
};

export default ListaNoticias;
