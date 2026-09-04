import {GameLoader} from './GameLoader';
import {AssetConfig} from './types/AssetConfig';
import {GameRenderer} from './renders/GameRenderer';

export abstract class BaseGame {
    private _gameId: string | null;
    private _baseLoader: GameLoader;
    protected _renderer: GameRenderer;

    constructor(gameId: string, renderer: GameRenderer) {
        this._gameId = gameId;
        this._renderer = renderer;
        this._baseLoader = new GameLoader(this._gameId);
    }

    protected abstract assets: AssetConfig;

    async init() {
        await this.loadAssets();
        await this.onInit();
    }

    protected async loadAssets() {
        await this._baseLoader.load(this.assets);
    }
    
    protected abstract onInit(): Promise<void>;
    protected onStart() {}

}
