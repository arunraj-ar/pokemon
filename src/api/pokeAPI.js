import { lazyAPI } from "../assets/helpers";

export const getPokemons = async (limit, offset) => {
    console.log("count: ",limit,offset)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();
    return data;
}

export const lazyGetPokemons = (limit) => lazyAPI(getPokemons, limit)