import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaNoticias from "./components/ListaNoticias";

function App() {
  //guardar la categoria seleccionada
  const [categoria, guardarCategoria] = useState("");
  //guardar las noticias
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const apiKey = "30e762cfcfff4dbb92f33d9da4df90ad";
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${apiKey}`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria]);
  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />
        <ListaNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
