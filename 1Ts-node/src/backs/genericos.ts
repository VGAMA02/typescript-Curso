/* import {Hero, Hero2 as superHero} from './classes/Hero'; */
/* import * as HeroClasses from './classes/Hero';
import { powers } from './data/powers';
import { printObjects, genericFunction,genericFunctionArrow } from './generics/generics';
const Hero2 = 123;
console.log('Hola Mundo!');
const ironman = new HeroClasses.Hero('Goku',8001,25);
console.log(ironman);


console.log(powers[1]);

printObjects(123);
printObjects(new Date);
printObjects('Hola');
printObjects({a:1,b:2,c:3});
console.log(genericFunctionArrow(3.14).toFixed(2));
console.log(genericFunction('Hello').toUpperCase());
console.log(genericFunction(new Date).getDate());

 */

import { Hero } from "../classes/Hero"
import { genericFunctionArrow } from "../generics/generics"
import { Villian } from "../interfaces"



const deadpool = {
    name: 'deadpool',
    realName: 'Wade winston wilson',
    dangerLevel: 1000
}

console.log(genericFunctionArrow<Villian>(deadpool).dangerLevel)