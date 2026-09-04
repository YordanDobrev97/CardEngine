import { Application } from 'pixi.js';

import { GameEngine } from './GameEngine'
import { GameRenderer } from './renders/GameRenderer';
import { PixiRenderer } from './renders/PixiRenderer';

export class PixiEngine implements GameEngine {
    private _app: Application;
    private _renderer: PixiRenderer | null = null;

    constructor() {
        this._app = new Application();
    }

    getRenderer(): GameRenderer {
        if (!this._renderer) {
            throw new Error('Renderer is not initialized!');
        }
        return this._renderer;
    }

    destroy(): void {}

    async init(): Promise<void> {
        await this._app.init({ resizeTo: window });

        this._renderer = new PixiRenderer(this._app.stage);
    }

    mount(element: HTMLElement): void {
        element.appendChild(this._app.canvas);
    }

}
