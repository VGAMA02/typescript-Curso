(() => {
    abstract class Mutante {
        constructor(public name:String, public realName: string){
            console.log('Constructor avenger llamado!');
        }

       

      
    
    }
    class Xmen extends Mutante {
        salvarMundo(){
            return 'Mundo a salvo';
        }
    }
    class Villian extends Mutante {
        conquistarMundo(){
            return 'Mundo Conquistado';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Xmen('Magneto', 'Magnus');
    console.log('wolverine');

    const printName = (character:Mutante) =>{
        console.log(character.name);
    }

    
})();