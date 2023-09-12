(() =>{
    class Avenger{
        name;
        power;

        constructor(name = 'no name',power = 0){
            this.name = name;
            this.power = power;
        }
    }

    const hulk = new Avenger('hulk',9001);

    class FlyingAvenger extends Avenger{
        flying;
        constructor(name,power){
            super(name,power) //llamar al contrustor del padre
            this.flying = true;
        }
    }

    const falcon = new FlyingAvenger('Falcon',50);

})();