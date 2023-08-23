import { useEffect, useState } from "react";
import typeServer from "../../mockServer/poke_types";
import "./TypeCard.css";

function TypeCard({ type_0 }) {
  const [double_damage_to, setDoubleDamageTo] = useState([]);
  const [half_damage_from, setHalfDamageFrom] = useState([]);
  const [no_damage_from, setNoDamageFrom] = useState([]);
  const [half_damage_to, setHalfDamageTo] = useState([]);
  const [no_damage_to, setNoDamageTo] = useState([]);
  const [double_damage_from, setDoubleDamageFrom] = useState([]);

  function firstToUpper(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  function getTypeData() {
    console.log(type_0);
    const singleItemList = typeServer.filter(
      (filter_item) => firstToUpper(filter_item.name) === type_0
    );
    const typeObject = singleItemList[0];
    console.log(typeObject.double_damage_from);

    setDoubleDamageTo(typeObject.double_damage_to);
    setHalfDamageFrom(typeObject.half_damage_from);
    setNoDamageFrom(typeObject.no_damage_from);
    setHalfDamageTo(typeObject.half_damage_to);
    setNoDamageTo(typeObject.no_damage_to);
    setDoubleDamageFrom(typeObject.double_damage_from);
  }

  useEffect(() => {
    getTypeData();
  }, []);

  return (
    <div className='typecard'>
      <h1>{type_0}</h1>
      <h2>Strengths</h2>
      {double_damage_to[0] ? (
        <>
          <p>Does Double Damage To:</p>
          <div className='typecard__type-wrapper'>
            {double_damage_to.map((item) => (
              <p className='typecard__type-item'>{item}</p>
            ))}
          </div>
        </>
      ) : (
        ""
      )}

      {half_damage_from[0] ? (
        <>
          <p>Take Half Damage From:</p>
          <div className='typecard__type-wrapper'>
            {half_damage_from.map((item) => (
              <p className='typecard__type-item'>{item}</p>
            ))}
          </div>
        </>
      ) : (
        ""
      )}

      {no_damage_from[0] ? (
        <>
          <p>Takes No Damage From:</p>
          <div className='typecard__type-wrapper'>
            {no_damage_from.map((item) => (
              <p className='typecard__type-item'>{item}</p>
            ))}
          </div>
        </>
      ) : (
        ""
      )}

      <h2>Weaknesses</h2>
      {half_damage_to[0] ? (
        <>
          <p>Does Half Damage To:</p>
          <div className='typecard__type-wrapper'>
            {half_damage_to.map((item) => (
              <p className='typecard__type-item'>{item}</p>
            ))}
          </div>
        </>
      ) : (
        ""
      )}

      {no_damage_to[0] ? (
        <>
          <p>Does No Damage To:</p>
          <div className='typecard__type-wrapper'>
            {no_damage_to.map((item) => (
              <p className='typecard__type-item'>{item}</p>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
      {no_damage_from[0] ? (
        <>
          <p>Takes No Damage from:</p>
          <div className='typecard__type-wrapper'>
            {no_damage_from.map((item) => (
              <p className='typecard__type-item'>{item}</p>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default TypeCard;
