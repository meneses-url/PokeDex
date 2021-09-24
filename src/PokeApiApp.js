import { LogoPokemon } from "./components/Logo/LogoPokemon";
import { Pokedex } from "./components/Pokedex/Pokedex";

const PokeApiApp = () => {
  return (
    <>
      <LogoPokemon />
      <div>
        <Pokedex />
      </div>
    </>
  );
};

export default PokeApiApp;
