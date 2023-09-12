(() => {
interface Client {
    name: string;
    age?: number;
    address:Address;
    getFullAdress?(id:string):string;
}
interface Address{
    id:number;
    zip:string;
    city:string;
}
    const client: Client = {
        name: 'Fernando',
        age: 25,
        address:{
            id:125,
            zip:'KY2 SUD',
            city:'ottawa'
        },
        getFullAdress(id:string){
            return this.address.city
        }
    }
})();