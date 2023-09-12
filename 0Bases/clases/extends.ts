(() => {
    class Avenger {
        constructor(public name:String, public realName: string){
            console.log('Constructor avenger llamado!');
        }

        protected getFullname(){
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger{
        constructor(name:String,realName: string,public isMutant:boolean){
            super(name,realName);
            console.log('Constructor Xmen llamado!');
        }

        getFullNameXmen(){
            super.getFullname();
            /* console.log(super.getFullname()); */
        }

        get fullName(){
            return `${this.name} - ${this.realName}`;
        }

        set fullName(name:string){
            this.name = name;
        }
    }

    const wolwerine = new Xmen('Wolverine','Logan',true);
})();