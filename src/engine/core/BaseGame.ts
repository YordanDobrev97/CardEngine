import { GameLoader } from '../GameLoader';
import { RenderObject } from '../rendering/RenderObject';
import { Theme } from '../theme/Theme';
import { ThemeResolver } from '../theme/ThemeResolver';
import { AssetConfig } from '../types/AssetConfig';
import { TextOptions } from '../ui/TextOptions';
import { GameEngine } from './GameEngine';

export abstract class BaseGame {
    private readonly _gameId: string;
    private readonly _baseLoader: GameLoader;
    protected readonly _engine: GameEngine;
    protected readonly _theme: Theme;
    protected _themeResolver: ThemeResolver;

    constructor(gameId: string, engine: GameEngine, theme: Theme) {
        this._gameId = gameId;
        this._engine = engine;
        this._theme = theme;
        this._themeResolver = new ThemeResolver(this._theme);
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

    protected createText(value: string, options?: TextOptions) {
        const styles = this._themeResolver.resolve(options?.variant ?? 'primary');
        return this._engine.createText(value, styles);
    }

    protected createSprite(assetKey: string): RenderObject {
        const sprite = this._engine.createSprite(assetKey);
        return sprite;
    }

    protected addToScene(object: RenderObject): void {
        this._engine.addToScene(object);
    }
}
