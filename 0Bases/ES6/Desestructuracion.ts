(() =>{
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activos: boolean;
        poder: number;
    }
    const avengers:Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Diwney jr',
        vision: 'Paul Battany',
        activos: true,
        poder: 1500
    }

    const printAvenger = ({ironman,...resto}:Avengers) =>{
        console.log(ironman,resto);
    }

    printAvenger(avengers);

/*     const {poder, vision} = avengers
    console.log(poder.toFixed(2),vision.toUpperCase()); */

        const avengersArr: string[] = ['Cap America','Ironman','Hulk'];
        const [,ironman] = avengersArr[1];
        console.log(ironman);

})();