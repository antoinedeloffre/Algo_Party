import {GameState} from "./GameState";
import {GameMachine} from "./GameMachine";
import {GameErrorType} from "../errors/GameError";

export class P2Turn implements GameState {
    gameMachine: GameMachine;

    constructor(gameMachine: GameMachine) {
        this.gameMachine = gameMachine;
    }

    playAPawn(x: number, y: number): void {
        const cell = this.gameMachine.grid.addPawn(x, y, this.gameMachine.currentPlayer!)
        if (this.gameMachine.grid.winningPosition(cell, this.gameMachine.currentPlayer!)) {
            this.gameMachine.setGameState(this.gameMachine.p2Winner)
            this.gameMachine.winner = this.gameMachine.currentPlayer
            alert('Player 2 won !!')
        } else {
            this.gameMachine.setGameState(this.gameMachine.p1Turn)
            this.gameMachine.setCurrentPlayer(this.gameMachine.player1)
        }
    }
}