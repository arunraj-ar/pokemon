import { useEffect, useState } from "react";
import { lazyGetPokemons } from "./api/pokeAPI";
import "./App.css";
import { debounce, throttle } from "./assets/helpers";
import { Card } from "./Card";
import { ScrollWrapper } from "./ScrollWrapper";

const getNextTenPokemons = lazyGetPokemons(10);
function App() {
  const [pokemons, setPokemons] = useState({});
  const [search, setSearch] = useState(0);

  const handlePokemonResponse = debounce(() => {
    setSearch((last) => last + 1);
  });

  useEffect(() => {
    getNextTenPokemons().then((res) => {
      setPokemons((prev) => {
        if(prev.next !== res.next){
          
          const prevres = prev.results || [];
          const newres = res?.results;
          const updated = [...prevres, ...newres]
          return {...res,results:[...updated]};
        }
        return res;
      });
    });
  }, [search]);

  return (
    <div className="min-w-fit min-h-dvh flex justify-center items-center">
      <ScrollWrapper>
        {pokemons?.results?.map((pokemon) => {
          return <Card key={pokemon.url} title={pokemon.name} />
        })}
      </ScrollWrapper>
      <button onClick={handlePokemonResponse}>call me</button>
    </div>
  );
}

export default App;
