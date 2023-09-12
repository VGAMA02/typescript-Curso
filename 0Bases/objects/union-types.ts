(() =>{

    type Hero = {
        name:string;
        age?:number;
        powers:string[],
        getName?: () => string;
    }
    
    let myCustomVariable: (string | number | Hero) = 'Fernando';
    myCustomVariable = 10;

    console.log(myCustomVariable);
    myCustomVariable = 'Goku';

    console.log(myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age:60,
        powers: ['Dinero']
    }
    
    console.log(myCustomVariable);
})()