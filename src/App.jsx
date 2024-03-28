import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {


  const [pokemon, setPokemon] = useState(1)
  const [count, setCount] = useState(1)
  var Api = "https://pokeapi.co/api/v2/pokemon/"

  useEffect(() => {
    buscar()
  }, [])

  const buscar = () => {
    axios.get(Api + count).then((response) => {
      setPokemon(response.data);
      setCount((count) => count + 1)
      console.log(pokemon)
    }).catch((error) => {
      console.error("Error: ", error);
    });
  }

  return (
    <div className='App'>
      {pokemon && (
        <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon?.sprites?.front_default} style={{ width: 400, height: 400 }} />
          <button onClick={buscar}>
            po
          </button>
        </>
      )}

    </div>

  )

}

export default App
