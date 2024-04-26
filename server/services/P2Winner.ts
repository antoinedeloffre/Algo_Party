import {GameState} from "./GameState";
import {GameMachine} from "./GameMachine";

export class P2Winner implements GameState {
    gameMachine: GameMachine;

    constructor(gameMachine: GameMachine) {
        this.gameMachine = gameMachine;
        this.gameMachine.setCurrentPlayer(undefined)
    }

    playAPawn(x: number, y: number): void {
        alert('Player 2 as already won')
    }
}