import { ContainerChild } from "pixi.js";
import { RenderObject } from "./RenderObject";

export class PixiRenderObject implements RenderObject {
    private readonly _object: ContainerChild;

    constructor(object: ContainerChild) {
        this._object = object;
    }

    get displayObject(): ContainerChild {
        return this._object;
    }
}
