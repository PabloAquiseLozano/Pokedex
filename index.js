const btnSearchElement = document.querySelector("#search");
const namePokemonElement = document.querySelector("#name");
const showPokemon = document.querySelector("#pokeData");

const POKE_API = "https://pokeapi.co/api/v2";

const fetchApi = async (endPoint) => {
  const response = await fetch(`${POKE_API}/${endPoint}`);

  return await response.json();
};

btnSearchElement.addEventListener("click", async () => {
  if (namePokemonElement.value.length <= 4) return;

  const pokemon = await fetchApi(
    `/pokemon/${namePokemonElement.value.toLowerCase()}`
  );

  const pokeData = `
  <h2>${pokemon.name.toUpperCase()}</h2>
  <img src="${pokemon.sprites.front_default}" >
  `;

  showPokemon.innerHTML = pokeData;

  console.log("pokemon:", pokemon);
});

//TRAER TODOS LOS POKEMONES

//const fetchPokemonData = async () => {
//  const data = await fetchApi("pokemon");
//
//  const pokemons = data.results.map(async (pokemon) => {
//    const _pokemon = await fetchApi(`/pokemon/${pokemon.name}`);
//
//    return _pokemon;
//  });
//
//  const results = await Promise.all(pokemons);
//
//  console.log("results:", results);
//
//  return results;
//};
