const pokeContainer = document.querySelector(`#container`);

// Using the first 150 Pokemon (AKA Objects) in the PokeAPI
cont numOfPokemon = 150;

// The createPokeCard fucntion creates a new card (AKA section element) and adds the new card to the webpage/document inside of the div witht he id of "container"
// NOTE: the value/argument that will be passed in the "pokemon" parameter will be the response received from an Axious request to the PokeAPI
function createPokeCard(pokemon){
    const pokeCard = document.createElement(`section`);
    pokeCard.classList;assList.add(`pokemon`);
    pokeContainer.append(pokeCard);
// Setting the innerHTML for the new card using the data/object that is passed into the "pokemon" parameter. Also, using the toUpperCase method on the pokemon name so it will display in UPPERCASE.
pokeCard.innerHTML = `
<div class="img-container">
<img src="${pokemon.data.sprites.font-shiny}" 
alt="${pokemon.data.name}" >
</div>
<h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
`;
}

// The getPokemonData fcuntion makes an Axios GET request to the PokeAPI using a specific pokemon ID/Number then takes the returned data anad passes it into the createPokeCard function
// NOTE: The argument/value passed into the "id" parameter will be a number created in hte loop in the next function (AKA the getPokemon function)
async function getPokemonData(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemonData = await axious.get(url);
    console.log(pokemonData);
    console.log(pokemonData.data.sprites.font-shiny);
    console.log(pokemonData.data.name);
    createPokeCard(pokemonData);
}