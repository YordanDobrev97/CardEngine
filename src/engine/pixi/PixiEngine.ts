import { Application, Assets, Sprite } from 'pixi.js';
import { GameEngine } from '../core/GameEngine'
import { RenderObject } from '../rendering/RenderObject';
import { PixiRenderObject } from '../rendering/PixiRenderObject';

export class PixiEngine implements GameEngine {
    private _app: Application;

    constructor() {
        this._app = new Application();
        //@ts-ignore
        globalThis.__PIXI_APP__ = this._app;
    }

    createSprite(assetKey: string): RenderObject  {
        const texture = Assets.get(assetKey);
        const sprite = new Sprite(texture);
        return new PixiRenderObject(sprite);
    }

    addToScene(object: RenderObject): void {
        if (!(object instanceof PixiRenderObject)) {
            throw new Error('PixiEngine can only add PixiRenderObject');
        }

        this._app.stage.addChild(object.displayObject);
    }

    destroy(): void { }

    async init(): Promise<void> {
        await this._app.init({ resizeTo: window });
    }

    mount(element: HTMLElement): void {
        element.appendChild(this._app.canvas);
    }
}
