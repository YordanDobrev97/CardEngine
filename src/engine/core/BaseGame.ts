import { GameLoader } from '../GameLoader';
import { RenderObject } from '../rendering/RenderObject';
import { Theme } from '../theme/Theme';
import { ThemeResolver } from '../theme/ThemeResolver';
import { AssetConfig } from '../types/AssetConfig';
import { ButtonOptions } from '../ui/Button';
import { SpriteOptions } from '../ui/Sprite';
import { TextOptions } from '../ui/Text';
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
        const styles = this._themeResolver.resolveText(options?.variant ?? 'primary');
        const text = this._engine.ui.createText(value, styles);

        if (options?.layout) {
            text.layout = options.layout;
        }

        return text;
    }

    protected createButton(label: string, style?: ButtonOptions) {
        const styles = this._themeResolver.resolveButton(style?.variant ?? 'primary');
        const btn = this._engine.ui.createButton(label, styles);
        
        if (style?.layout) {
            btn.layout = style.layout;
        }

        return btn;
    }

    protected createSprite(assetKey: string, options?: SpriteOptions): RenderObject {
        const sprite = this._engine.createSprite(assetKey, options);
        return sprite;
    }

    protected addToScene(object: RenderObject): void {
        this._engine.addToScene(object);
    }
}
