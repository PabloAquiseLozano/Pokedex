const btnSearchElement = document.querySelector("#search");
const namePokemonElement = document.querySelector("#name");

const POKE_API = "https://pokeapi.co/api/v2/";

const fetchPokemonData = async () => {
	const response = await fetch(`${POKE_API}/pokemon`);
	const data = await response.json();
	const results = await Promise.all(data.results);
	return results;
};

btnSearchElement.addEventListener('click', async ()=>{
	const found = await fetchPokemonData();
	const foundPokemon = found.find(pokemon => pokemon.name.toUpperCase() === namePokemonElement.value.toUpperCase())
	console.log(foundPokemon);
	
	
	
	}
 
)
