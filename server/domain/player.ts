export class Player {
    constructor(private readonly name:string, private readonly pion:string){
        this.name = name;
        this.pion = pion;
    }

    getName(){
        return this.name;
    }

    toString() {
        return this.pion;
    }
}