(() =>{ //Una funcion anonima auto invocada para que typescrit no entre en conflicto con otros archivos al poner varias variables que esten en global
    let avenger:any = 123;
    let exists;
    let power;

    avenger = 'Dr Strange';
    console.log(avenger.charAt[0]);
    /* console.log( (avenger as string).charAt[0]); */
    avenger = 150.264565459;
    console.log(avenger.toFixed(2));

    console.log(exists);
    console.log(power);
})()