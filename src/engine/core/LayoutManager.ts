import { RenderObject } from '../rendering/RenderObject';
import { LayoutOptions } from '../types/LayoutOptions';

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

    arrange(object: RenderObject, options: LayoutOptions) {
        const horizontal = options.horizontal ?? 'left';
        const vertical = options.vertical ?? 'top';

        let x = 0;
        let y = 0;

        if (horizontal === 'center') {
            x = (this._width - object.width) / 2;
        } else if (horizontal === 'right') {
            x = this._width - object.width;
        }

        if (vertical === 'center') {
            y = (this._height - object.height) / 2;
        } else if (vertical === 'bottom') {
            y = this._height - object.height;
        }

        if (options.shift?.x) {
            x += options.shift.x;
        }

        if (options.shift?.y) {
            y += options.shift.y;
        }

        object.x = x;
        object.y = y;
    }

    resize(width: number, height: number): void {
        this._width = width;
        this._height = height;
    }
}