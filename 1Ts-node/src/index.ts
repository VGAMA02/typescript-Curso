/* import { getPokemon } from "./generics/getPokemon";
getPokemon(1)
    .then(resp => console.log(resp.name.toUpperCase()))
    .catch(error => console.error(error))
    .finally(() => console.log('Fin de get')) */

/////DECORADORES

import { Pokemon } from "./classes/Pokemon-class";
const charmander = new Pokemon('charmander');

console.log(charmander.name);
charmander.savePokemonToDB(3);
//charmander.publicApi = 'asd'