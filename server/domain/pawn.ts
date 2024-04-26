import {Player} from "./player";

export class Pawn {
    constructor(private readonly joueur: Player) {
        this.joueur = joueur;
    }

    getJoueur(){
        return this.joueur;
    }

    toString(): string{
        return this.joueur.toString();
    }
}