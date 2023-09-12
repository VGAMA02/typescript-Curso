(() =>{ //Una funcion anonima auto invocada para que typescrit no entre en conflicto con otros archivos al poner varias variables que esten en global
    //strictNullChecks
    let isActive: (boolean | null)  = null;
    console.log(isActive);
})()