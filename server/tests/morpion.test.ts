import {describe, expect, test} from "@jest/globals";
import {Grid} from "../domain/grid";
import {GameErrorType} from "../errors/GameError";
import {GameMachine} from "../services/GameMachine";
import {expectGameOver} from "./utils";

describe("Morpion", () => {

    test('should not be able to place a pawn on occupied cell', () => {
        const morpion = getMorpion()

        // Morpion case
        morpion.playAPawn(2, 1)
        expect(() => morpion.playAPawn(2, 1)).toThrow(GameErrorType.ALREADY_A_PAWN)
    })

    describe("Check for winning position", () => {

        test('should not win if 3 pawns are aligned from different players', () => {
            const morpion = getMorpion()

            morpion.playAPawn(0, 0)
            morpion.playAPawn(0, 1)
            morpion.playAPawn(0, 2)

            expect(morpion.winner).toBe(undefined)
        })

        test('should win if 3 aligned pawns horizontally', () => {
            const morpion = getMorpion()

            // Morpion case
            morpion.playAPawn(0, 0)
            morpion.playAPawn(0, 1)
            morpion.playAPawn(1, 0)
            morpion.playAPawn(1, 1)
            morpion.playAPawn(2, 0)
            expectGameOver(morpion)
        })

        test('should win if 3 aligned pawns vertically', () => {
            const morpion = getMorpion()

            // Morpion case
            morpion.playAPawn(0, 0)
            morpion.playAPawn(1, 0)
            morpion.playAPawn(0, 1)
            morpion.playAPawn(1, 1)
            morpion.playAPawn(0, 2)
            expectGameOver(morpion)
        })

        test('should win if 3 aligned pawns diagonally top left to bottom right', () => {
            const morpion = getMorpion()

            // Morpion case
            morpion.playAPawn(0, 0)
            morpion.playAPawn(1, 0)
            morpion.playAPawn(1, 1)
            morpion.playAPawn(1, 2)
            morpion.playAPawn(2, 2)
            expectGameOver(morpion)
        })

        test('should win if 3 aligned pawns diagonally top right to bottom left', () => {
            const morpion = getMorpion()

            // Morpion case
            morpion.playAPawn(2, 0)
            morpion.playAPawn(1, 0)
            morpion.playAPawn(1, 1)
            morpion.playAPawn(1, 2)
            morpion.playAPawn(0, 2)
            expectGameOver(morpion)
        })
    })
})

const getMorpion = () => {
    const grid = new Grid(3, 3, false, 3)
    return new GameMachine(grid)
}

