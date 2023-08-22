import { useEffect, useState } from "react";
import mockServer from "../../mockServer/mockServer";
import "./RandomGenerator.css";

function RandomGenerator({ pokemonData }) {
  const [entryData, setEntryData] = useState({});
  const [imageNumber, setImageNumber] = useState("");
  const [typeMedallion_1, setTypeMedallion_1] = useState("");
  const [typeMedallion_2, setTypeMedallion_2] = useState("");

  function firstToLower(word) {
    return word.charAt(0).toLowerCase() + word.slice(1);
  }

  function generateRandom() {
    const randomNumber = Math.floor(Math.random() * 1008) + 1;
    return randomNumber;
  }

  function getData() {
    const randomNumber = generateRandom();
    console.log(randomNumber);

    const data = mockServer[randomNumber];
    const stringToUse = "/official-artwork/" + (randomNumber + 1) + ".png";
    const typeString_1 = `/types/${firstToLower(data.type_0)}-m.png`;
    let typeString_2 = "";
    data.type_1
      ? (typeString_2 = `/types/${firstToLower(data.type_1)}-m.png`)
      : (typeString_2 = "");

    setImageNumber(stringToUse);
    setTypeMedallion_1(typeString_1);
    setTypeMedallion_2(typeString_2);

    setEntryData(data);
  }

  useEffect(() => {
    getData();
  }, []);

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

          <div className='rand__type-wrapper'>
            <p className='rand__attribute-title'>Type 1:</p>
            <img
              className='rand__type-emblem'
              src={process.env.PUBLIC_URL + typeMedallion_1}
              alt='type1'
            />
            <p className='rand__attribute_type_type'>{entryData.type_0}</p>
          </div>
          {entryData.type_1 ? (
            <div className='rand__type-wrapper'>
              <p className='rand__attribute-title'>Type 2:</p>
              <img
                className='rand__type-emblem'
                src={process.env.PUBLIC_URL + typeMedallion_2}
                alt='type1'
              />
              <p className='rand__attribute_type_type'>{entryData.type_1}</p>
            </div>
          ) : (
            ""
          )}

          <p className='rand__attribute-title'>Description: </p>
          <p className='rand__attribute'>{entryData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default RandomGenerator;
