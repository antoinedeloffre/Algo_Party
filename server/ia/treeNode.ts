import {Grid} from "../domain/grid";

export class TreeNode {
    private children: TreeNode[];
    private parent: TreeNode | undefined;

    constructor(public grid: Grid) {
        this.grid = grid;
        this.children = []
        this.parent = undefined
    }

    isLeaf() {
        return this.children.length === 0;
    }

    addChild(child: TreeNode) {
        child.parent = this
        this.children.push(child)
    }
}