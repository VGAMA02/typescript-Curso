"use strict";
(() => {
    /*  const numbers2: (string|number|boolean)[] = [1,2,3,4,5,'6',7,8,9]; */
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const villians = ['Omega Rojo', 'Dormamu', 'Duente muerde'];
    numbers.push(11);
    console.log(numbers);
    villians.forEach(v => {
        console.log(v.toLocaleUpperCase());
    });
})();
