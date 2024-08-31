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
    <img src="${pokemon.sprites.other.home.front_default}" >
    `;

  showPokemon.innerHTML = pokeData;

  console.log("pokemon:", pokemon);
});
