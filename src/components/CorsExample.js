import axios from 'axios';
import { useState, useEffect } from 'react';

function CorsExample() {
	const [isLoading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState();

	const fetchPokemon = () => {
		axios
			.get('https://pokeapi.co/api/v2/pokemon/5', {
				headers: {
					'Access-Control-Allow-Origin': '*'
				}
			})
			.then((res) => {
				setPokemon(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(true);
			});
	};

	useEffect(() => {
		fetchPokemon();
	}, []);

	if (isLoading) {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100vh',
					backgroundColor: 'grey'
				}}
			>
				Loading...
			</div>
		);
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
				backgroundColor: 'grey'
			}}
		>
			<div>{pokemon.name}</div>
			<img alt={pokemon.name} src={pokemon.sprites.front_default} />
		</div>
	);
}

export default CorsExample;
