(() =>{
    type Avenger = {
        name: string;
        weapon: string;
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'ArmorSuit'
    }
    const CaptainAmerica: Avenger = {
        name: 'Capitan America',
        weapon: 'Escudo'
    }
    const Thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjornir'
    }

    const avengers = [ironman,Thor,CaptainAmerica];

    for (const avenger of avengers) {
        console.log(avenger);
    }
})();