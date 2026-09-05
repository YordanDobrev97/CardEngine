import {GameEngine} from './engine/core'
import {WarGame} from './games/war/Game';

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
        const game = this.createGame(this._engine);
        await game.init();
    }

    private createGame(engine: GameEngine) {
        return new WarGame('war', engine);
    }
}