import React from 'react';

const PokemonCard = (props) => {

	const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${props.card.id}.png`;
	
	return (
		<>
		{props.card.id ? 
		<div className="pokedex__card">
			<h2>Pokemon Card</h2>
			<div className="card__layout">
			<div className="card__left">
				<img className="card__image"  alt="pokemon" src={imageUrl}  />
				<h3>{props.card.name} #{props.card.id}</h3>
			</div>
			<div className="card__right">
			<table>
			<tbody>
				<tr>
					<td>Type</td>
					<td>
						{props.card.types.map((item, index) => (	
							<span className="card__type" key={item.type.name}>{item.type.name}{props.card.types.length - 1 !== index ? "," : null} </span>))
						}
					</td>
				</tr>
				<tr>
					<td>Attack</td>
					<td>{(props.card.stats.find((item) => {return item.stat.name === 'attack'}))['base_stat']}</td>
				</tr>
				<tr>
					<td>Defense</td>
					<td>{(props.card.stats.find((item) => {return item.stat.name === 'defense'}))['base_stat']}</td>
				</tr>
				<tr>
					<td>HP</td>
					<td>{(props.card.stats.find((item) => {return item.stat.name === 'hp'}))['base_stat']}</td>
				</tr>
				<tr>
					<td>SP Attack</td>
					<td>{(props.card.stats.find((item) => {return item.stat.name === 'special-attack'}))['base_stat']}</td>
				</tr>
				<tr>
					<td>SP Defense</td>
					<td>{(props.card.stats.find((item) => {return item.stat.name === 'special-defense'}))['base_stat']}</td>
				</tr>
				<tr>
					<td>Speed</td>
					<td>{(props.card.stats.find((item) => {return item.stat.name === 'speed'}))['base_stat']}</td>
				</tr>
				<tr>
					<td>Weight</td>
					<td>{props.card.weight}</td>
				</tr>
				<tr>
					<td>Total Moves</td>
					<td>{props.card.moves.length}</td>
				</tr>
				</tbody>
			</table>
			</div>
			</div>
		</div>
		: null}
		</>
		);
}

export default PokemonCard;