import { ContainerChild } from "pixi.js";
import { RenderObject } from "./RenderObject";
import { LayoutOptions } from "../types/LayoutOptions";

export class PixiRenderObject implements RenderObject {
    private readonly _displayObject: ContainerChild;
    private readonly _originalWidth: number;
    private readonly _originalHeight: number;

    layout?: LayoutOptions;

    constructor(object: ContainerChild) {
        this._displayObject = object;

        this._originalWidth = object.width;
        this._originalHeight = object.height;
    }

    setScale(scale: number): void {
        this.displayObject.scale.set(scale);
    }

    get width() {
        return this._displayObject.width;
    }

    get height() {
        return this._displayObject.height;
    }

    get displayObject(): ContainerChild {
        return this._displayObject;
    }

    get x(): number {
        return this._displayObject.x;
    }

    set x(value: number) {
        this._displayObject.x = value;
    }

    get y(): number {
        return this._displayObject.y;
    }

    set y(value: number) {
        this._displayObject.y = value;
    }

    get originalWidth(): number {
        return this._originalWidth;
    }

    get originalHeight(): number {
        return this._originalHeight;
    }
}
