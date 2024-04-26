import {Grid} from "~/server/domain/grid";
import {Morpion} from "~/server/services/games/morpion";
import {Player} from "~/server/domain/player";

const grid = new Grid(3, 3)

const morpion = new Morpion(grid)

morpion.addPawn(1, 2, new Player('j1'))

grid.printGrid()