"use strict";
(() => {
    const fullName = (firstName, LastName, upper = false) => {
        if (upper) {
            return `${firstName}${LastName || '----'}`.toUpperCase();
        }
        else {
            return `${firstName}${LastName || '----'}`;
        }
    };
    const name = fullName('Tony', 'stark', true);
    console.log(name);
})();
