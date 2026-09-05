import { Application, Assets, ContainerChild, Sprite } from 'pixi.js';
import { GameEngine } from '../core/GameEngine'
import { RenderObject } from '../rendering/RenderObject';
import { PixiRenderObject } from '../rendering/PixiRenderObject';
import { LayoutManager } from '../core/LayoutManager';

export class PixiEngine implements GameEngine {
    private _app: Application;
    private _layoutManager: LayoutManager | null = null;
    private _resizeFrame: number | null = null;
    private readonly _renderObjects = new WeakMap<ContainerChild, PixiRenderObject>();

    constructor() {
        this._app = new Application();
        //@ts-ignore
        globalThis.__PIXI_APP__ = this._app;
    }

    createSprite(assetKey: string): RenderObject {
        const texture = Assets.get(assetKey);
        const sprite = new Sprite(texture);
        sprite.label = assetKey;

        const renderObject = new PixiRenderObject(sprite);
        this._renderObjects.set(sprite, renderObject);

        return renderObject;
    }

    addToScene(object: RenderObject): void {
        if (!(object instanceof PixiRenderObject)) {
            throw new Error('PixiEngine can only add PixiRenderObject');
        }

        this._app.stage.addChild(object.displayObject);
    }

    destroy(): void {
        window.removeEventListener('resize', this.handleResize);

        if (this._resizeFrame !== null) {
            cancelAnimationFrame(this._resizeFrame);
            this._resizeFrame = null;
        }

        this._app.destroy();
    }

    async init(): Promise<void> {
        await this._app.init({ resizeTo: window });

        this._layoutManager = new LayoutManager(this._app.screen.width, this._app.screen.height);
        window.addEventListener('resize', this.handleResize);
    }

    mount(element: HTMLElement): void {
        element.appendChild(this._app.canvas);
    }

    applyLayout() {
        this._layoutManager?.resize(this._app.screen.width, this._app.screen.height);

        const background = this.findObject('background');
        if (background) {
            this._layoutManager?.fit(background);
        }
    }

    private handleResize = () => {
        if (this._resizeFrame !== null) {
            cancelAnimationFrame(this._resizeFrame);
        }

        this._resizeFrame = requestAnimationFrame(() => {
            this.applyLayout();
            this._resizeFrame = null;
        });
    }

    private findObject(label: string) {
        const obj = this._app.stage.getChildByLabel(label);
        if (!obj) {
            return null;
        }

        const renderObject = this._renderObjects.get(obj);
        if (!renderObject) {
            throw new Error(`Missing RenderObject wrapper for "${label}"`);
        }

        return renderObject;
    }
}
