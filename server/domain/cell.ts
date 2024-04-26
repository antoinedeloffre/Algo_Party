import {Pawn} from "~/server/domain/pawn";

export class Cell {
    private pawn: Pawn | undefined;

    constructor(public x: number, public y: number) {
        this.x = x;
        this.y = y;
        this.pawn = undefined
    }

    setPawn(pawn: Pawn | undefined) {
        this.pawn = pawn;
    }

    getPawn() {
        return this.pawn;
    }
}