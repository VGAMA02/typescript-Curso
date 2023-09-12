"use strict";
(() => {
    const client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'ottawa'
        },
        getFullAdress(id) {
            return this.address.city;
        }
    };
})();
