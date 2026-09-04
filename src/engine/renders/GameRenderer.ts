import {RenderObject} from './RenderObject';

export interface GameRenderer {
    add(object: RenderObject): void;
    createSprite(assetKey: string): RenderObject;
    resize(width: number, height: number): void;
}
