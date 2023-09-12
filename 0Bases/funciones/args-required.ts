(() => {
    const fullName = (firstName:string,LastName:string):string =>{
        return `${firstName}${LastName}`;
    }

    const name = fullName('Tony','Stark');
    console.log(name);
})()