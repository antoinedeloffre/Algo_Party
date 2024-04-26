import {Grid} from "../domain/grid";
import {describe, expect, test} from '@jest/globals';
import {GameErrorType} from "../errors/GameError";

describe("Proper number of cells", () => {
    test('should have proper number of cells', () => {
        const grid = new Grid(6, 5, false, 1)
        expect(grid.getCells().length).toBe(6)
        for (let i = 0; i < 6; i++) {
            expect(grid.getCells()[i].length).toBe(5)
        }
    })
})


describe('Invalid configuration', () => {
    test('should not be able to have no columns or no rows', () => {
        expect(() => new Grid(0, 5, false, 1)).toThrow(GameErrorType.INVALID_CONF)
        expect(() => new Grid(5, 0, false, 1)).toThrow(GameErrorType.INVALID_CONF)
    })

    test('should not be able to have a number to win greater than colums AND rows', () => {
        expect(() => new Grid(5, 5, false, 6)).toThrow(GameErrorType.INVALID_CONF)
    })
})


