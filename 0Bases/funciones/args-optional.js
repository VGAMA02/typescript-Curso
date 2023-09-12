"use strict";
(() => {
    const fullName = (firstName, LastName) => {
        return `${firstName}${LastName || '----'}`;
    };
    const name = fullName('Tony');
    console.log(name);
})();
