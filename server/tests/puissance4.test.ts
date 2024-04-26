import {describe, expect, test} from "@jest/globals";
import {Grid} from "../domain/grid";
import {GameErrorType} from "../errors/GameError";
import {GameMachine} from "../services/GameMachine";
import {expectGameOver} from "./utils";

describe("Puissance 4", () => {
    test('should not be able to place a pawn on a full column', () => {
        const puissance4 = getPuissance4()

        puissance4.playAPawn(1, 1)
        puissance4.playAPawn(1, 1)
        puissance4.playAPawn(1, 1)
        puissance4.playAPawn(1, 1)
        puissance4.playAPawn(1, 1)
        puissance4.playAPawn(1, 1)

        expect(() => puissance4.playAPawn(1, 1)).toThrow(GameErrorType.INVALID_POSITION)
    })

    describe("Check for winning position", () => {
        test('should not be winning if 4 pawns are aligned but from different players', () => {
            const puissance4 = getPuissance4()

            puissance4.playAPawn(1, 1)
            puissance4.playAPawn(1, 1)
            puissance4.playAPawn(1, 1)
            puissance4.playAPawn(1, 1)

            expect(puissance4.winner).toBe(undefined)
        })

        test('should be winning if 4 pawns are aligned horizontally', () => {
            const puissance4 = getPuissance4()

            puissance4.playAPawn(1, 1)
            puissance4.playAPawn(1, 1)
            puissance4.playAPawn(2, 1)
            puissance4.playAPawn(2, 1)
            puissance4.playAPawn(3, 1)
            puissance4.playAPawn(3, 1)
            puissance4.playAPawn(4, 1)

            expectGameOver(puissance4)

        })

        test('should be winning if 4 pawns are aligned vertically', () => {
            const puissance4 = getPuissance4()

            puissance4.playAPawn(1, 1)
            puissance4.playAPawn(2, 1)
            puissance4.playAPawn(1, 1)
            puissance4.playAPawn(2, 1)
            puissance4.playAPawn(1, 1)
            puissance4.playAPawn(2, 1)
            puissance4.playAPawn(1, 1)

            expectGameOver(puissance4)

        })

        test('should be winning if 4 pawns are aligned diagonally from bottom right to top left', () => {
            const puissance4 = getPuissance4()

            puissance4.playAPawn(3, 1)
            puissance4.playAPawn(3, 1)
            puissance4.playAPawn(3, 1)
            puissance4.playAPawn(3, 1)
            puissance4.playAPawn(4, 1)
            puissance4.playAPawn(4, 1)
            puissance4.playAPawn(5, 1)
            puissance4.playAPawn(4, 1)
            puissance4.playAPawn(1, 1)
            puissance4.playAPawn(6, 1)
            puissance4.playAPawn(4, 1)
            puissance4.playAPawn(5, 1)
            expectGameOver(puissance4)
        })

        test('should be winning if 4 pawns are aligned diagonally from bottom left to top right', () => {
            const puissance4 = getPuissance4()

            puissance4.playAPawn(3, 1)
            puissance4.playAPawn(3, 1)
            puissance4.playAPawn(3, 1)
            puissance4.playAPawn(3, 1)
            puissance4.playAPawn(1, 1)
            puissance4.playAPawn(2, 1)
            puissance4.playAPawn(2, 1)
            puissance4.playAPawn(2, 1)
            puissance4.playAPawn(4, 1)
            puissance4.playAPawn(1, 1)
            puissance4.playAPawn(4, 1)
            puissance4.playAPawn(0, 1)

            expectGameOver(puissance4)
        })
    })
})


const getPuissance4 = () => {
    const grid = new Grid(7, 6, true, 4)
    return new GameMachine(grid)
}