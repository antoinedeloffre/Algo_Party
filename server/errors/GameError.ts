export class GameError extends Error {
    constructor(type: GameErrorType = GameErrorType.UNKNOWN) {
        super(type);
        this.name = "GameError";
        alert(type)
    }

}

export enum GameErrorType {
    UNKNOWN = 'Unknown Game Error',
    ALREADY_A_PAWN = 'Already a pawn on this cell',
    INVALID_POSITION = 'Invalid position',
    INVALID_CONF = 'Invalid configuration',
}