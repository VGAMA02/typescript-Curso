import powers from "../data/powers";

export class Hero{
    constructor(public name:String, public powerId:number,public age:number){

    }

    get power():string{
        return powers.find(power => power.id === this.powerId)?.desc || 'not found';
    }
}
export class Hero2{
    constructor(public name:String, public powerId:number,public age:number){

    }
}
export const PI = 3.1416;
export const Thetrue = true;