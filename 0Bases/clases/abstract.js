"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor avenger llamado!');
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvo';
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo Conquistado';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Xmen('Magneto', 'Magnus');
    console.log('wolverine');
    const printName = (character) => {
        console.log(character.name);
    };
})();
