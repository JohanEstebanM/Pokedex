import axios from 'axios';

export const getPokemons = async () => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
