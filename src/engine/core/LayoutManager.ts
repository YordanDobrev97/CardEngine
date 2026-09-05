import { RenderObject } from '../rendering/RenderObject';

type Fit = 'cover' | 'contain';

export class LayoutManager {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }
    
    fit(object: RenderObject, mode: Fit = 'cover', offsetX = 0, offsetY = 0): void {
        const scaleX = this._width / object.originalWidth;
        const scaleY = this._height / object.originalHeight;
        const scale = mode === 'cover' ? Math.max(scaleX, scaleY) : Math.min(scaleX, scaleY);

        object.setScale(scale);
        object.x = (this._width - object.width) / 2 + offsetX;
        object.y = (this._height - object.height) / 2 + offsetY;
    }

    resize(width: number, height: number): void {
        this._width = width;
        this._height = height;
    }
}