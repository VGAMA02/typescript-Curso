"use strict";
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
            console.log('Constructor avenger llamado!');
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy el unico apocalipsis');
            }
            return Apocalipsis.instance;
        }
    }
    const apocalipsis = Apocalipsis.callApocalipsis();
    /*  const apocalipsis = new Apocalipsis('Soy apocalipsis'); */
})();
