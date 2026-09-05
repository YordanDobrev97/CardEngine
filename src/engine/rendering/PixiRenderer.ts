import { Assets, Container, Sprite } from 'pixi.js';
import { GameRenderer } from "./GameRenderer";
import { RenderObject } from './RenderObject';
import { PixiRenderObject } from './PixiRenderObject';

export class PixiRenderer implements GameRenderer {
    private _stage: Container;

    constructor(stage: Container) {
        this._stage = stage;
    }
    
    resize(width: number, height: number): void {
        throw new Error('Method not implemented.');
    }

    createSprite(assetKey: string): RenderObject {
        const texture = Assets.get(assetKey);
        const sprite = new Sprite(texture);
        return new PixiRenderObject(sprite);
    }

    add(object: RenderObject): void {
        if (!(object instanceof PixiRenderObject)) {
            throw new Error('PixiRenderer can only add PixiRenderObject instances');
        }

        this._stage.addChild(object.object);
    }

}
