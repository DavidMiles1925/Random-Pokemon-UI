//React
import RandomGenerator from "../RandomGenerator/RandomGenerator";
import { useEffect, useState } from "react";

// Styles
import "../../fonts/fonts.css";
import "./App.css";

// Components
import Header from "../Header/Header";

import mockServer from "../../mockServer/mockServer";

function App() {
  const [pokemonData, setPokemonData] = useState({});

  function getPokemonData() {
    setPokemonData(mockServer);
  }
  //
  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <div className='App'>
      <Header />
      <RandomGenerator pokemonData={pokemonData} />
    </div>
  );
}

export default App;
