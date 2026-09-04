import { Container } from "pixi.js";
import { RenderObject } from "./RenderObject";

export class PixiRenderObject implements RenderObject {
    private readonly _object: Container;

    constructor(object: Container) {
        this._object = object;
    }

    get object(): Container {
        return this._object;
    }
}
