"use strict";
(() => {
    const fullName = (firstName, LastName) => {
        return `${firstName}${LastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log(name);
})();
