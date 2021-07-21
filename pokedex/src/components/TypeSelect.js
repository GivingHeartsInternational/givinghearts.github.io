import React, {useEffect, useState} from 'react';

const TypeSelect = (props) => {

	const [types, setTypes] = useState({});

	//fetch types
	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/type`)
	  	.then(response => response.json())
	  	.then(result => {
	  		setTypes(result);
	  	});
	}, []);

	return (
			<select className="type-select" name='type-select' onChange={(e) => { props.setType(e.target.value); props.setCount(12) }}> {/* on select - set type and restart count  */}
					<option value="all">All</option>
						{types.results ? types.results.map((item) => (
					<option key={item.name} value={item.name}>{item.name}</option>
					)) : null}
			}
			</select>
		);
}

export default TypeSelect;