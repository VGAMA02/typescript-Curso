(() =>{ //Una funcion anonima auto invocada para que typescrit no entre en conflicto con otros archivos al poner varias variables que esten en global
    let isSuperman:boolean = true;
    let isBatman:boolean = false;
    isSuperman = (isBatman) ? true:false;
    console.log(isSuperman);
})()