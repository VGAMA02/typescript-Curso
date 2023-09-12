(() => {
    const fullName = (firstName:string,LastName?:string):string =>{
        return `${firstName}${LastName || '----'}`;
    }

    const name = fullName('Tony');
    console.log(name);

})()