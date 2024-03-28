// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState(null);
  const [count, setCount] = useState(1)
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';


  useEffect(() => {
    buscar()
  }, []);


  const buscar = () => {
    axios.get(apiUrl + count)
      .then((response) => {
        setPokemon(response.data);
        setCount((count) => count + 1)
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }


  if (!pokemon) return <div>Carregando...</div>;


  return (
    <div className="App">
      <h1>Pokémon: {pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} style={{ width: 400, height: 400 }} />
      <button onClick={buscar}>
        Proximo
      </button>
    </div>

  );

}

export default App;