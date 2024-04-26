import {GameMachine} from "~/server/services/GameMachine";
import {expect} from "@jest/globals";

export const expectGameOver = (game: GameMachine) => {
    expect(game.winner).toBe(game.currentPlayer)
}