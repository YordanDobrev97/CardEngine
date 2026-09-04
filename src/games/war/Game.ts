import { BaseGame } from '../../engine';
import { AssetConfig } from '../../engine/types/AssetConfig';
import { GameRenderer } from '../../engine/renders/GameRenderer';
import assets from './config/assets';

export class WarGame extends BaseGame {
    protected assets: AssetConfig = assets;

    constructor(gameId: string, renderer: GameRenderer) {
        super(gameId, renderer);
    }

    async init(): Promise<void> {
        await super.init();

        return Promise.resolve();
    }

    protected onInit(): Promise<void> {
        const background = this._renderer.createSprite('background');
        this._renderer.add(background);
        return Promise.resolve();
    }
}
