import { useState } from "react";
import mockServer from "../../mockServer/mockServer";
import "./RandomGenerator.css";

function RandomGenerator({ pokemonData }) {
  const [entryData, setEntryData] = useState({});
  const [imageNumber, setImageNumber] = useState("");

  function generateRandom() {
    const randomNumber = Math.floor(Math.random() * 1008);
    return randomNumber;
  }

  function getData() {
    const randomNumber = generateRandom();
    console.log(randomNumber);

    const data = mockServer[randomNumber];
    const stringToUse =
      process.env.PUBLIC_URL +
      `../../images/official-artwork/${randomNumber}.png`;
    console.log(stringToUse);

    setImageNumber(stringToUse);

    setEntryData(data);
  }
  return (
    <div className='page-wrapper'>
      <div className='rand'>
        <button className='rand__button' onClick={getData}>
          New Pokemon!
        </button>
        <h1 className='rand__heading'>{entryData.name}</h1>
        <p className='rand__attribute'></p>
        <img
          className='rand__sprite'
          src={process.env.PUBLIC_URL + imageNumber}
          alt='sprite'
        ></img>
        <div className='rand__info-wrapper'>
          <p className='rand__attribute-title'>Pokedex Number: </p>
          <p className='rand__attribute'>{entryData.number}</p>
          <p className='rand__attribute-title'>Type 1:</p>
          <p className='rand__attribute'>{entryData.type_0}</p>
          <p className='rand__attribute-title'>Type 2:</p>
          <p className='rand__attribute'>{entryData.type_1}</p>
          <p className='rand__attribute-title'>Description: </p>
          <p className='rand__attribute'>{entryData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default RandomGenerator;
