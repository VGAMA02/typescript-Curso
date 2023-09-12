"use strict";
(() => {
    class Avenger {
        static getAveAge() {
            return this.name; //devuelve el nombre de la clase, no de la instancia
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})!!!`;
        }
    }
    /*  private name: string = ''; */
    /*  public team: string = ''; */
    /*  public realName?: string = ''; */
    Avenger.avgAge = 35; //se puede acceder a la propiedad estatica desde la clase y no desde un objeto de la clase
    const antman = new Avenger('Antman', 'Cap');
    console.log(antman);
    console.log(antman.bio());
})();
