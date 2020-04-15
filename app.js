var pokemones = [1,2,3,4,175]

async function llamarPokemon(id){
    for (let i = 0; i < id.length; i++) {
        var url = `https://pokeapi.co/api/v2/pokemon/${id[i]}`;
        var pokemon = await fetch(url);
        // console.log(pokemon); muestra el load (no el payload)
        var respuesta = await pokemon.json();
        //console.log(respuesta.name);
        document.write(respuesta.name);
    }
}


llamarPokemon(pokemones);

