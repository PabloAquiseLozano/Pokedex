const POKE_API = "https://pokeapi.co/api/v2/";

const fetchPokemonData = async () => {
	const response = await fetch(`${POKE_API}/pokemon`);
	const data = await response.json();
	const results = await Promise.all(data.results);
	return results;
};
