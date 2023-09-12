(() =>{ //Una funcion anonima auto invocada para que typescrit no entre en conflicto con otros archivos al poner varias variables que esten en global
    const abc = (message:string):never =>{ //never implica que el codigo nunca debe de entrar aquí, la funcion no debe ser exitosa.
        throw new Error(message);
    }

    abc('Auxilio!');
})()