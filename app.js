var pokemones = 150;
var content = document.getElementById('content');

async function llamarPokemon(cantidad) {
    for (let i = 1; i <= cantidad; i++) {
        var url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        var pokemon = await fetch(url);
        var respuesta = await pokemon.json();
        crearTarjeta(respuesta);
    }
}
llamarPokemon(pokemones);

function crearTarjeta(obj) {
    let tarjeta = document.createElement('code');
    tarjeta.classList.add('pokemon'); // agrego clase pokemon a la tarjeta
    var htext = `<div class="info">${obj.name}</div>`;
    tarjeta.innerHTML = htext;
    // console.log(tarjeta);
    content.appendChild(tarjeta);
    // console.log(content);
}

