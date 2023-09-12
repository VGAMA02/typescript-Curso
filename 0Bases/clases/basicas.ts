(() => {
    class Avenger {
       /*  private name: string = ''; */
       /*  public team: string = ''; */
       /*  public realName?: string = ''; */
        static avgAge: number = 35; //se puede acceder a la propiedad estatica desde la clase y no desde un objeto de la clase
        static getAveAge(){
            return this.name; //devuelve el nombre de la clase, no de la instancia
        }

        constructor(private name: string,public team:string,public realName?:string){ //al ponerle private, public etc declaras la variable ya en el constructor
            this.name = name;
            this.team = team;
            this.realName = realName;
        }

        bio(){
            return `${this.name} (${this.team})!!!`;
        }
    }

    const antman: Avenger = new Avenger('Antman','Cap');
    console.log(antman);
    console.log(antman.bio());
})();