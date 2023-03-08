import React, { Component, useState, useEffect } from "react";
import axios from 'axios';



function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `clicou ${contador} vezes :O`
  });
  
  function incremento(){
    setContador(contador + 1);
  }
  
    return (
      <div className="App">
        <h1>Primeiro contador</h1>
        <button onClick={incremento}>clicque aqui pra incrementar</button> <span> vc clicou {contador} vezes</span>
      </div>
    );
  }

export default App;
