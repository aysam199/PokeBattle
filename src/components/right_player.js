import React from 'react';
import { getPokemon } from '../utils/getPokemon';
import { getMove } from '../utils/getMove';

const RightPlayer = ({ pokemon, setPokemon, setMove, turn, player}) => {
  const [moves, setMoves] = React.useState([]);
  let i=0;
  React.useEffect(() => {
    getPokemon(pokemon.name).then(res => setPokemon(res));
  }, []);

  React.useEffect(() => {}, [turn, pokemon]);

  React.useEffect(() => {
    if (!pokemon.moves) return;

  //generate random numbers to get random moves
  let randoms = []
  while(randoms.length < 4){
    randoms.push(Math.ceil(Math.random() * pokemon.moves.length))
  }
  if (!randoms[3]) return <h1>Loading...</h1>;
  const movesPromises = [0, 1, 2, 3].map(i =>{
    return getMove(pokemon.moves[randoms[i]].move.url)
  });

    Promise.all(movesPromises).then(res => setMoves(res));
  }, [pokemon]);

  if (!moves[3]) return <h1>Loading...</h1>;

  return (
    <section className="player">
      <h1>{player}</h1>
      <h3>{(turn ===2) ? <div>Your turn</div> : <div></div>}</h3>

      <div id="rightPlayer">
        <img alt="pokemon" src={pokemon.sprites.front_default}></img>
        <h1 className="pokeName">{pokemon.name}</h1>
        <ul className="moves">
            {moves.map(move => (
          <li>
            <img
              onClick={() => (turn === 2 ? setMove({ power: move.power, accuracy: move.accuracy }) : '')}
              alt="pokgeball"
              className="pokeball"
              src="./pokeball.png"
            ></img>
            <br/>
            <span>Ability: {move.name}</span>
            <br/>
            <span>Damage: {move.power/2 >0 ? move.power/2 : 30}</span>
            <br/>
            <span>Accuracy: {move.accuracy===null? 50 : move.accuracy-30}</span>
          </li>
            ))}
        </ul>
      </div>
      <img id="characterOne" src={pokemon.sprites.front_default}></img>

    </section>
  );
};

export default RightPlayer;