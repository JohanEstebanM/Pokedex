import React, { useEffect, useState } from 'react';
import { getPokemons } from './assets/Hooks/getPokemon';

const App = () => {
  const [PokemonsData, setPokemonsData] = useState({});
  const Pokemon = async () => {
    const res = await getPokemons();
    setPokemonsData(res);
  };

  useEffect(() => {
    Pokemon();
  }, []);

  console.log(PokemonsData);
  return (
    <div>
      <h1>pokedex</h1>
    </div>
  );
};

export default App;
