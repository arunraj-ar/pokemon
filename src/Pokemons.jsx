import { useEffect, useState } from "react";
import { lazyGetPokemons } from "./api/pokeAPI";
import { debounce, getCompletedMessage } from "./assets/helpers";
import Card from "./Card";
import ScrollWrapper from "./ScrollWrapper";
import InfiniteLoader from "./InfiniteLoader";

const getNextPokemons = lazyGetPokemons(12);
const Pokemons = () => {
  const [pokemons, setPokemons] = useState({});

  const handlePokemonResponse = debounce(() => {
    getNextPokemons().then((res) => {
      setPokemons((prev) => {
        if (prev.next !== res.next) {
          const prevres = prev.results || [];
          const newres = res?.results;
          const updated = [...prevres, ...newres];
          return { ...res, results: [...updated] };
        }
        return prev;
      });
    });
  });

  useEffect(() => {
    handlePokemonResponse();
  }, []);

  return (
    <div className=" flex flex-col min-w-fit min-h-dvh justify-center items-center">
      {Object.keys(pokemons).length > 0 ? (
        <>
          <ScrollWrapper>
            {pokemons?.results?.map((pokemon) => {
              return <Card key={pokemon.url} title={pokemon.name} />;
            })}
          </ScrollWrapper>
          {pokemons.next ? (
            <>
              <InfiniteLoader api={handlePokemonResponse} />
              <button
                onClick={handlePokemonResponse}
                className="m-12 underline cursor-pointer"
              >
                load more
              </button>
            </>
          ) : (
            <p className="m-12">{getCompletedMessage()}</p>
          )}
        </>
      ) : (
        <InfiniteLoader />
      )}
    </div>
  );
};

export default Pokemons;
