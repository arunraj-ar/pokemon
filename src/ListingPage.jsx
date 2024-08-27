import Pokemons from "./Pokemons";

const ListingPage = (props) => {
  return (
    <div className="flex flex-col items-center justify-center mt-80">
      <h1 className="text-5xl sticky top-0 w-dvw lg:w-1/3 bg-[#242424] p-4">
        Pokemons
      </h1>
      <div className="w-1/3 m-10 ml-16">filters</div>
      <Pokemons />
    </div>
  );
};

export default ListingPage;
