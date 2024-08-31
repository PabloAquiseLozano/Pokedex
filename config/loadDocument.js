(async () => {
  const cargarPokemones = await fetch(`${POKE_API}/pokemon?limit=60&offset=0`);
  const response = await cargarPokemones.json();

  const data = response.results.map(async (pokemon) => {
    const _data = await fetch(pokemon.url);
    return _data.json();
  });

  const showData = await Promise.all(data);

  const mapShowData = showData.map((poke) => {
    showPokemon.innerHTML += `
    <div>
    <h1>${poke.name}</h1>
    <img src="${poke.sprites.other.home.front_default}">
    </div>`;
  });

  console.log(showData);
})();
