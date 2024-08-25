import { paginateAPI } from "../assets/helpers";

export const getPokemons = async (limit = 10, offset = 0) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// export const getPokemonDetails = async ()

export const getRegions = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/region`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getRegionDetails = async (name, id) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/region/${id || name}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getRandomRegion = async () => {
  try {
    const regionsData = await getRegions();
    const randomId = Math.floor(Math.random() * regionsData.count);
    const data = await getRegionDetails(randomId || 1);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const lazyGetPokemons = (limit) => paginateAPI(getPokemons, limit);
