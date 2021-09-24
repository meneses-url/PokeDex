import React from "react";

export const LogoPokemon = () => {
  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav className="nav">
      <img src={imgUrl} alt="Poke Api logp" className="nav__logo" />
    </nav>
  );
};
