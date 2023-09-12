(() => {
    class Apocalipsis {

        static instance:Apocalipsis;

        private constructor(public name:String){
            console.log('Constructor avenger llamado!');
        }

        static callApocalipsis():Apocalipsis{
            if(!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis('Soy el unico apocalipsis');
            }

            return Apocalipsis.instance;
        }
    }

    const apocalipsis = Apocalipsis.callApocalipsis();
   /*  const apocalipsis = new Apocalipsis('Soy apocalipsis'); */
})();