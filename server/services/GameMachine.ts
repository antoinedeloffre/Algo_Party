import {GameState} from "./GameState";
import {Player} from "../domain/player";
import {Grid} from "../domain/grid";
import {P1Turn} from "./P1Turn";
import {P2Turn} from "./P2Turn";
import {P1Winner} from "./P1Winner";
import {P2Winner} from "./P2Winner";

export class GameMachine {

    p1Turn: GameState;
    p2Turn: GameState;
    p1Winner: GameState;
    p2Winner: GameState;
    gameState: GameState;

    player1: Player
    player2: Player
    winner: Player | undefined

    currentPlayer: Player | undefined

    grid: Grid

    constructor(grid: Grid) {
        this.p1Turn = new P1Turn(this);
        this.p2Turn = new P2Turn(this);
        this.p1Winner = new P1Winner(this);
        this.p2Winner = new P2Winner(this);
        this.gameState = this.p1Turn;
        this.player1 = new Player('p1', 'X')
        this.player2 = new Player('p2', 'O')
        this.currentPlayer = this.player1
        this.grid = grid
    }

    setGameState(gameState: GameState) {
        this.gameState = gameState
    }

    setCurrentPlayer(player: Player | undefined) {
        this.currentPlayer = player
    }

    playAPawn(x: number, y: number) {
        return this.gameState.playAPawn(x, y);
    }

}