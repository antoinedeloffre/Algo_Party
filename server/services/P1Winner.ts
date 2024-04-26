import {GameState} from "./GameState";
import {GameMachine} from "./GameMachine";

export class P1Winner implements GameState {
    gameMachine: GameMachine;

    constructor(gameMachine: GameMachine) {
        this.gameMachine = gameMachine;
        this.gameMachine.setCurrentPlayer(undefined)
    }

    playAPawn(x: number, y: number): void {
        alert('Player 1 as already won')
    }
}