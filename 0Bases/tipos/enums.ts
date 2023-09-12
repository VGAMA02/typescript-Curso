(() =>{ //Una funcion anonima auto invocada para que typescrit no entre en conflicto con otros archivos al poner varias variables que esten en global
    enum AudioLevel{
        min = 1,
        medium,
        max = 10,
        maxi,
    }

    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})()