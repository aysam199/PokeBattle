import React from "react";
import ChoosePokemon from './choose_pokemon';
var isFirstRound = true


function Battle({ p1Life, setP1Life, p2Life, setP2Life, move, turn, setTurn, setPokemon1,pokemon1, setPokemon2,pokemon2, setPlayer1, setPlayer2 }) {
  React.useEffect(() => {
    if (move === null) return;
    let accuracy = move.accuracy===null? 50 : move.accuracy-30;
    let damage = move.power >0 ? move.power/2 : move.power+30;
    let isGonnaHit = (Math.ceil(Math.random() * 100)) >= accuracy ? 0 : 1;
    if(isFirstRound){
        isFirstRound = false;
        return;
    }
    if (turn === 1) {
      setTurn(2);
      setP2Life(p2Life - (damage * isGonnaHit));
      // let character = getElementById("charachterOne")
      // character.style.opacity = "0"
    } else {
      setTurn(1);
      setP1Life(p1Life - (damage * isGonnaHit));
    }
    return;
  }, [move]);

  React.useEffect(() => {
    if(p1Life<=0 || p2Life <=0){
      window.location.reload(false); 
    }
    let width1 = (p1Life / 100) * 100;
    width1 = p1Life < 0 ? 0 : width1;
    document.getElementById("firstPokemonLife").style.width = width1 + "%";
    let width2 = (p2Life / 100) * 100;
    width2 = p2Life < 0 ? 0 : width2;
    document.getElementById("secondPokemonLife").style.width = width2 + "%";
  }, [p1Life, p2Life]);

  return (
    <div className="stats">
      <img className="lifeHeart" src="./life.png"></img>
      <div className="lifeBar" id="lifeBar1">
        <div id="firstPokemonLife">{p1Life}%</div>
      </div>
      &nbsp; &nbsp; &nbsp;
      <div className="lifeBar" id="lifeBar2">
        <div id="secondPokemonLife">{p2Life}%</div>
      </div>
      <img className="lifeHeart" src="./life.png"></img>
    </div>
  );
}

export default Battle;
