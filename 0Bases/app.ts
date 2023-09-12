(() => {
    ///Comandos
    //tsc --init agrega el tsconfig
    //tsc -w hace que automaticamente los archivos ts generen el archivo js
    //tsc app.ts genera el archivo js del archivo mencionado en este caso el app.ts

    // Tipos
    const batman:String = 'Bruce';
    const superman:String = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes: [String,String] = [batman,superman];
    const villano: [string,number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum powerHero{
        Acuaman = 0,
        Batman = 1,
        Flash = 5,
        Superman = 100
    }
    const fuerzaFlash = powerHero.Flash;
    const fuerzaSuperman = powerHero.Superman;
    const fuerzaBatman = powerHero.Batman;
    const fuerzaAcuaman = powerHero.Acuaman;
    
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda(message:string):never{
      throw new Error(message);
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  