import {Cell} from "./cell";
import {GameError, GameErrorType} from "../errors/GameError";
import {Player} from "./player";
import {Pawn} from "./pawn";

export class Grid {
    private readonly cells: Cell[][];

    constructor(gridWidth: number, gridLength: number, private readonly hasGravity: boolean, private readonly numberToWin: number) {
        if (numberToWin < 1 || (numberToWin > gridLength && numberToWin > gridWidth) || gridLength < 1 || gridWidth < 1) {
            throw new GameError(GameErrorType.INVALID_CONF)
        }
        this.hasGravity = hasGravity
        this.numberToWin = numberToWin
        this.cells = [[]]
        for (let i = 0; i < gridWidth; i++) {
            this.cells[i] = []
            for (let j = 0; j < gridLength; j++) {
                this.cells[i][j] = new Cell(i, j);
            }
        }
    }

    getCells() {
        return this.cells;
    }

    getCell(x: number, y: number) {
        if (this.isInvalidCell(x, y)) {
            throw new GameError(GameErrorType.INVALID_POSITION)
        }
        return this.cells[x][y];
    }

    isInvalidCell(x: number, y: number) {
        return x < 0 || x >= this.cells.length || y < 0 || y >= this.cells[0].length
    }

    isValidCell(x: number, y: number) {
        return !this.isInvalidCell(x, y)
    }

    addPawn(x: number, y: number, joueur: Player): Cell {
        const cell = this.hasGravity ? this.getLowestCell(x) : this.getCell(x, y)
        if (cell.getPawn()) {
            throw new GameError(GameErrorType.ALREADY_A_PAWN)
        }
        cell.setPawn(new Pawn(joueur))
        return cell
    }

    getLowestCell(x: number): Cell {
        let y = this.getCells()[0].length - 1;
        let c = this.getCell(x, y)
        while (this.getCell(x, y).getPawn()) {
            if (y == 0) {
                throw new GameError(GameErrorType.INVALID_POSITION)
            }
            c = this.getCell(x, --y)
        }
        return c
    }

    winningPosition(cell: Cell, joueur: Player): boolean {
        return (
            this.checkDirection(cell, joueur, 1, 0) || // Horizontal
            this.checkDirection(cell, joueur, 0, 1) || // Vertical
            this.checkDirection(cell, joueur, 1, 1) || // Diagonal (bottom-left to top-right)
            this.checkDirection(cell, joueur, 1, -1)   // Diagonal (bottom-right to top-left)
        );
    }

    private checkDirection(cell: Cell, joueur: Player, deltaX: number, deltaY: number): boolean {
        let count = 1;
        let x = cell.x + deltaX;
        let y = cell.y + deltaY;

        while (this.isValidCell(x, y) && this.getCell(x, y).getPawn()?.getJoueur() === joueur) {
            count++;
            if (count === this.numberToWin) {
                return true;
            }
            x += deltaX;
            y += deltaY;
        }

        x = cell.x - deltaX;
        y = cell.y - deltaY;

        while (this.isValidCell(x, y) && this.getCell(x, y).getPawn()?.getJoueur() === joueur) {
            count++;
            if (count === this.numberToWin) {
                return true;
            }
            x -= deltaX;
            y -= deltaY;
        }

        return false;
    }

    printGrid() {
        let s = '\t'
        for (let x = 0; x < this.cells.length; x++) {
            s += ` ${x} \t`
        }
        s += '\n'
        for (let y = 0; y < this.cells[0].length; y++) {
            s += y + '\t'
            for (let x = 0; x < this.cells.length; x++) {
                if (this.getCell(x, y).getPawn()) {
                    s += `[${this.getCell(x, y).getPawn()?.toString()}]\t`
                } else {
                    s += '[ ]\t'
                }
            }
            s += '\n'
        }
        console.log(s)
    }
}