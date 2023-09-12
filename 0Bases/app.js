"use strict";
(() => {
    ///Comandos
    //tsc --init agrega el tsconfig
    //tsc -w hace que automaticamente los archivos ts generen el archivo js
    //tsc app.ts genera el archivo js del archivo mencionado en este caso el app.ts
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let powerHero;
    (function (powerHero) {
        powerHero[powerHero["Acuaman"] = 0] = "Acuaman";
        powerHero[powerHero["Batman"] = 1] = "Batman";
        powerHero[powerHero["Flash"] = 5] = "Flash";
        powerHero[powerHero["Superman"] = 100] = "Superman";
    })(powerHero || (powerHero = {}));
    const fuerzaFlash = powerHero.Flash;
    const fuerzaSuperman = powerHero.Superman;
    const fuerzaBatman = powerHero.Batman;
    const fuerzaAcuaman = powerHero.Acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda(message) {
        throw new Error(message);
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
