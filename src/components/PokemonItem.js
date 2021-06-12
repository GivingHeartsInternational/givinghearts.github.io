/*
* Display pokemon item in list
*/

import React, {useEffect, useState} from 'react';

const PokemonItem = (props) => {

const [item, setItem] = useState({})
const [load, setLoad] = useState(false)

const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`;

useEffect(() => {
	fetch(props.url)
	  .then(response => response.json())
	  .then(result => {
	  	setItem(result)
	  });
	}, []);

	return(
		<div key={item.id} className='pokedex__item' onClick={() => props.setCard(item)} >
			<img className="item__image" onLoad={() => setLoad(true)} alt="pokemon" src={imageUrl} style={{display: load ? "block" : "none"}}  />
			<div className="preloader" style={{display: load ? "none" : "block"}}></div>

			<h3>{item.name}</h3>
			<div className="types">
				{item.types ? item.types.map((item) => (
					<div key={item.type.name} className={`types__item ${item.type.name}`}>{item.type.name}</div>
				)) : null}
			</div>
		</div>
		);
}

export default PokemonItem;
