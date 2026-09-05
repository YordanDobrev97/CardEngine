import {GameEngine} from './engine/core'
import appConfig from './config/app';
import {WarGame} from './games/war/Game';
import { GameRenderer } from './engine/rendering/GameRenderer';

export default class Application {
    private _engine: GameEngine;

    constructor(engine: GameEngine) {
        this._engine = engine;
    }

    async init() {
        const mountElement = document.querySelector<HTMLElement>('#app');

        if (!mountElement) {
            throw new Error('Application root not found');
        }

        await this._engine.init();
        this._engine.mount(mountElement);
        const game = this.createGame(this._engine.getRenderer());
        await game.init();
    }

    private createGame(renderer: GameRenderer) {
        return new WarGame('war', renderer);
    }
}