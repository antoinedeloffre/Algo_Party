import {defineStore} from "pinia";
import {useGameStore} from "~/server/store/gameStore";
import {Cell} from "../domain/cell";

export type RootState = {};

const gameStore = useGameStore()

export const useActionStore = defineStore({
    id: "actionStore",
    state: () =>
        ({} as RootState),

    actions: {
        playAPawn(x: number, y: number) {
            gameStore.jeu.playAPawn(x, y)
        }
    },
});





