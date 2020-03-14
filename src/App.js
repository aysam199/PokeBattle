import React from 'react';
import './App.css';
import LeftPlayer from './components/left_player';
import RightPlayer from './components/right_player';
import ChoosePokemon from './components/choose_pokemon';
import Battle from './components/battle_stats';
import { getPokemon } from './utils/getPokemon';
import { getMove } from './utils/getMove';



function App() {
  const [pokemon1, setPokemon1] = React.useState(null);
  const [pokemon2, setPokemon2] = React.useState(null);
  const [player1, setPlayer1] = React.useState(null);
  const [player2, setPlayer2] = React.useState(null);
  const [p1Life, setP1Life] = React.useState(100)
  const [p2Life, setP2Life] = React.useState(100)
  const [move, setMove] = React.useState({power: 0});
  const [turn, setTurn] = React.useState(Math.ceil(Math.random() * 2));


   if(player1===null || player2===null) {   
      return(<div><ChoosePokemon setPlayer1={setPlayer1} setPlayer2={setPlayer2} pokemon1={pokemon1} setPokemon1={setPokemon1} pokemon2={pokemon2} setPokemon2={setPokemon2}/></div>)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Battle p1Life={p1Life} setP1Life={setP1Life} p2Life={p2Life} setP2Life={setP2Life} move={move} turn={turn} setTurn={setTurn} setPokemon1={setPokemon1} pokemon1={pokemon1} setPokemon2={setPokemon2} pokemon2={pokemon2} setPlayer1={setPlayer1} setPlayer2={setPlayer2}/>

        <section className="battle">
          <LeftPlayer pokemon={pokemon1} setPokemon={setPokemon1} setMove={setMove} turn={turn} player={player1}/>
          <RightPlayer pokemon={pokemon2} setPokemon={setPokemon2} setMove={setMove} turn={turn} player={player2}/>
        </section>
      </header>
    </div>
  );
}

export default App;
