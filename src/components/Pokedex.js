import React, {useEffect, useState} from 'react';

import TypeSelect from './TypeSelect';
import PokemonItem from './PokemonItem';
import PokemonCard from './PokemonCard';

const Pokedex = (props) => {

	const [count, setCount] = useState(12);
	const [items, setItems] = useState({});
	const [card, setCard] = useState({});
	const [type, setType] = useState('all');

	useEffect(() => {

		//display all type
		if(type === "all") {
		fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${count}`, {
	})
  .then(response => response.json())
  .then(result => {
  	setItems(result)
  //console.log(result)
  });
} 

 //display specific type
else {

//get type url by name
fetch(`https://pokeapi.co/api/v2/type`)
  .then(response => response.json())
  .then(result => {
  	const url = (result.results.find((item) => {
  		return item.name === type;
  	})).url;

  	//get list of pokemon items by type
  	fetch(url)
  	.then(response => response.json())
  	.then(result => {
  		
	  	let resultObject = {};
	  	let items = [];
	  	result.pokemon.forEach((item) => {
	  		items.push(item.pokemon);
	  	})

	  	let limitedItems = items.slice(0, count);
	  	resultObject.results = limitedItems
	 		setItems(resultObject);
  	});
  });
}

}, [count, type]);

	return (
		<div className="pokedex">
			<h1>Pokedex</h1>
			<div className='pokedex__layout'>
				<div className="pokedex__left">
					<TypeSelect setType={setType} setCount={setCount}/>
					<div className="pokedex__list">
							{items.results ? items['results'].map((item) => (
								<PokemonItem key={item.name} url={item.url} setCard={setCard} />
							)) : null}
					</div>	
					<button className="btn-load" onClick={() => {let newCount = count + 12; setCount(newCount)}}>Load</button>
				</div>
				<div className="pokedex__right">
					<PokemonCard card={card}/> 
				</div>
			</div>
		</div>
	);
}

export default Pokedex;