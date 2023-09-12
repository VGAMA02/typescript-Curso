(() =>{
    //No usar var en recomendacion es mejor utilizar let ya que el uso de var puede dar errores extraños
    let a = 'Gama';
    console.log(a);
    //siempre es mejor usar constantes a menos que se sepa muy bien que el valor va a cambiar
    const getName = () => {
        console.log('Viejo getName');
    }
})();