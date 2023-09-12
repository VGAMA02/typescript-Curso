(() => {
    const fullName = (firstName:string,LastName?:string,upper:boolean = false):string =>{
        if(upper){
            return `${firstName}${LastName || '----'}`.toUpperCase();
        }
        else{
            return `${firstName}${LastName || '----'}`
        }
    
    }

    const name = fullName('Tony','stark',true);
    console.log(name);

})()