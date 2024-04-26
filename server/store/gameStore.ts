import {defineStore} from "pinia";
import {GameMachine} from "~/server/services/GameMachine";
import {Grid} from "~/server/domain/grid";

export type RootState = {
    jeu: GameMachine;
};

export const useGameStore = defineStore({
    id: "gameStore",
    state: () =>
        ({
            jeu: new GameMachine(new Grid(3, 3, false, 3)),
        } as RootState),

    actions: {
        genererJeu(largeur: number, hauteur: number, hasGravity: boolean, numberToWin: number) {
            this.jeu = new GameMachine(new Grid(largeur, hauteur, hasGravity, numberToWin))
        }
    },
});