import { GameLoader } from '../GameLoader';
import { RenderObject } from '../rendering/RenderObject';
import { AssetConfig } from '../types/AssetConfig';
import { GameEngine } from './GameEngine';

export abstract class BaseGame {
    private readonly _gameId: string;
    private readonly _baseLoader: GameLoader;
    protected readonly _engine: GameEngine;

    constructor(gameId: string, engine: GameEngine) {
        this._gameId = gameId;
        this._engine = engine;
        this._baseLoader = new GameLoader(this._gameId);
    }

    protected abstract assets: AssetConfig;

    async init() {
        await this.loadAssets();
        await this.onInit();
        this._engine.applyLayout();
    }

    protected async loadAssets() {
        await this._baseLoader.load(this.assets);
    }
    
    protected abstract onInit(): Promise<void>;

    protected createSprite(assetKey: string): RenderObject {
        const sprite = this._engine.createSprite(assetKey);
        return sprite;
    }

    protected addToScene(object: RenderObject): void {
        this._engine.addToScene(object);
    }
}
