import React from 'react';
import { getPokemon } from "../utils/getPokemon";

const ChoosePokemon = ({setPlayer1, setPlayer2, pokemon1, setPokemon1, pokemon2, setPokemon2 }) => {
    const [pokemonList, setPokemonList] = React.useState(null);
    let [p1,sp1]=React.useState({name: "pikachu"});
    let [p2,sp2]=React.useState({name: "pikachu"});
    let [n1,sn1]=React.useState(null);
    let [n2,sn2]=React.useState(null);
    let fet = [getPokemon('?offset=0&limit=150'),getPokemon(p1.name),getPokemon(p2.name)]
    React.useEffect(()=>{
        Promise.all(fet)
           .then(res => {setPokemonList(res[0])
                         setPokemon1(res[1])
                         setPokemon2(res[2])
                         })
           .catch(console.log)
        },[])
    React.useEffect(()=>{
        getPokemon(p1.name)
            .then(res => {setPokemon1(res)})
            .catch(console.log)
    },[p1])
    React.useEffect(()=>{
        getPokemon(p2.name)
            .then(res => {setPokemon2(res)})
            .catch(console.log)
    },[p2])
    if (pokemonList === null || pokemon1 === null || pokemon2 === null)
        return "Loading..."
    return (    
    <section className="choicePage">
      <div name="LeftChoice" className="choice">
        <form>
            <label htmlFor="name1">Trainer's Name: </label>
            <input name="name1" placeholder="Choose trainer name before ready" value={n1} type='text' onChange={(event)=> { sn1(event.target.value)}}/>
            <br/><br/>
            <label htmlFor="choice1">Choose Pokemon:</label>
            <select list="choice" name="choice2" onChange={(event)=>sp1({name: event.target.value})} >
            <option key="pika" value="pikachu">pikachu</option>
            {pokemonList.results.map(elem => (
                <option key={elem.name} value={elem.name}>{elem.name}</option>
            ))}</select>
            
        </form>
        <div>
            <img className="choosePokeImg" src={pokemon1.sprites.front_default} alt="of pokemon"/>
            <h1 align="center">{pokemon1.name} stats</h1>
            <h2 align="left">Pokedex Id: {pokemon1.id}</h2>
            <h2 align="left"><b>Name: </b>{pokemon1.name}</h2>
            <h2 align="left"><b>Base Experience: </b>{pokemon1.base_experience}</h2>
            <h2 align="left"><b>Height: </b>{pokemon1.height}</h2>  
            <h2 align="left"><b>Weight: </b>{pokemon1.weight}</h2> 
        </div>
    </div>
    <button className="startButton" name="start1" onClick={()=> { 
                if(n1 !== null && n2 !== null){
                setPlayer1(n1); setPokemon1(p1);setPlayer2(n2); setPokemon2(p2)
                }
            }}>
                Ready</button>
    <div name="RightChoice" className="choice">
      <form>
      <label htmlFor="name2">Trainer's Name: </label>
            <input placeholder="Choose trainer name before ready" name="name2" value={n2} type='text' onChange={(event)=>{ sn2(event.target.value)}}/>
            <br/><br/>
            <label htmlFor="choice2">Choose Pokemon:</label>
            <select list="choice" name="choice2" onChange={(event)=>sp2({name: event.target.value})} >
            <option key="pika" value="pikachu">pikachu</option>
                {pokemonList.results.map(elem => (
                <option key={elem.name} value={elem.name}>{elem.name}</option>
            ))}</select>
      </form>
      <div>
            <img className="choosePokeImg" src={pokemon2.sprites.front_default} alt="of pokemon"/>
            <h1 align="center">{pokemon2.name} stats</h1>
            <h2 align="left"><b>Pokedex Id: </b>{pokemon2.id}</h2>
            <h2 align="left"><b>Name: </b>{pokemon2.name}</h2>
            <h2 align="left"><b>Base Experience: </b>{pokemon2.base_experience}</h2>
            <h2 align="left"><b>Height: </b>{pokemon2.height}</h2>  
            <h2 align="left"><b>Weight: </b>{pokemon2.weight}</h2> 
        </div>
    </div>   
    </section>);
};

export default ChoosePokemon;
