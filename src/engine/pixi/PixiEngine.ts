import { Application, Assets, ContainerChild, Sprite } from 'pixi.js';
import { GameEngine } from '../core/GameEngine'
import { RenderObject } from '../rendering/RenderObject';
import { PixiRenderObject } from '../rendering/PixiRenderObject';
import { LayoutManager } from '../core/LayoutManager';
import { PixiUiEngine } from './PixiUIEngine';
import { SpriteOptions } from '../ui/Sprite';

export class PixiEngine implements GameEngine {
    private _app: Application;
    private _layoutManager: LayoutManager | null = null;
    private _resizeFrame: number | null = null;
    private readonly _renderObjects = new WeakMap<ContainerChild, PixiRenderObject>();

    readonly ui: PixiUiEngine;

    constructor() {
        this._app = new Application();
        //@ts-ignore
        globalThis.__PIXI_APP__ = this._app;
        this.ui = new PixiUiEngine();
    }

    createSprite(assetKey: string, options?: SpriteOptions): RenderObject {
        const texture = Assets.get(assetKey);
        const sprite = new Sprite(texture);

        if (options?.alpha) {
            sprite.alpha = options.alpha;
        }

        sprite.label = assetKey;

        return new PixiRenderObject(sprite);
    }

    addToScene(object: RenderObject): void {
        if (!(object instanceof PixiRenderObject)) {
            throw new Error('PixiEngine can only add PixiRenderObject');
        }

        const displayObject = object.displayObject;
        this._renderObjects.set(displayObject, object);
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

        for (const child of this._app.stage.children) {
            const renderObject = this._renderObjects.get(child);

            if (!renderObject?.layout) {
                continue;
            }

            this._layoutManager?.arrange(
                renderObject,
                renderObject.layout
            );
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
