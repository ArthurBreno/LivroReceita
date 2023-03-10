import React, { Component, useState, useEffect } from "react";

function App() {

  const [noticia, setNoticia] = useState([]);
  const [filaDeBusca, setFilaDeBusca] = useState([]);
  const [url, setUrl] = useState(`http://hn.algolia.com/api/v1/search?query=react`);
  const [loading, setLoanding] = useState(false);

  const receberNoticias = () => {
    setLoanding(true);
    fetch(url)
      .then(result => result.json())
      .then(data => setNoticia((data.hits), setLoanding(false)))
      .catch(error => console.log(error));
  }

  const handleSubmit = e => {
    e.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${filaDeBusca}`);
  }

  useEffect(() => {
    receberNoticias();
  }, [url]);

  const handleChange = e => {
    setFilaDeBusca(e.target.value);
  }

  const showLoad = () => (
    loading ? <h2>Carregando...</h2> : ""
  );

  const formulary = () => (
    <form onSubmit={handleSubmit}>
      <span>Busque aqui sua noticia: </span> <input type="text" value={filaDeBusca} onChange={handleChange}></input>
      <button>Buscar</button>
    </form>
  );

  const showNews = () => (
    noticia.map((n, i) => (<p key={i}>{n.title}</p>))
  );

  return (
    <div>
      <h1>NOTICIAS QUENTICIMAS</h1>
      {showLoad()}
      {formulary()}
      <hr></hr>
      {showNews()}
    </div>

  );




  // const [contador, setContador] = useState(0);

  // useEffect(() => {
  //   document.title = `clicou ${contador} vezes :O`
  // });

  // function incremento(){
  //   setContador(contador + 1);
  // }

  //   return (
  //     <div className="App">
  //       <h1>Primeiro contador</h1>
  //       <button onClick={incremento}>clicque aqui pra incrementar</button> <span> vc clicou {contador} vezes</span>
  //     </div>
  //   );
}

export default App;

