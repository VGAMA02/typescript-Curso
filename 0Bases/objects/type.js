"use strict";
(() => {
    let flash = {
        name: 'Barry allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
})();