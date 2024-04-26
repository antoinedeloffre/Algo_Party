import {Player} from "../domain/player";
import {Grid} from "../domain/grid";
import {TreeNode} from "./treeNode";
import {Cell} from "../domain/cell";
import {GameMachine} from "~/server/services/GameMachine";

export class MinMax {

    minMax(grid: Grid, depth: number, player: Player) {
        if (depth == 0) {

        }
    }

    initTree(game: Partial<GameMachine>): TreeNode {
        const origin: TreeNode = new TreeNode(game.grid!)

        this.getPossibleMoves(game.grid!, game.currentPlayer!).forEach(c => {
            while (!game.grid?.winningPosition(c, game.currentPlayer!)) {

            }
        })

        return origin

    }

    getPossibleMoves(grid: Grid, player: Player): Cell[] {
        const possibleMoves: Cell[] = []
        for (let i = 0; i < grid.getCells().length; i++) {
            let cell
            try {
                cell = grid.addPawn(i, 0, player)
            } catch (e) {
                // Ignored error
            }

            if (cell) {
                possibleMoves.push(cell)
            }
        }
        return possibleMoves
    }
}