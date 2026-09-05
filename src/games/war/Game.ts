import { BaseGame } from '../../engine/core';
import { AssetConfig } from '../../engine/types/AssetConfig';
import { GameRenderer } from '../../engine/rendering/GameRenderer';
import assets from './config/assets';

export class WarGame extends BaseGame {
    protected assets: AssetConfig = assets;

    constructor(gameId: string, renderer: GameRenderer) {
        super(gameId, renderer);
    }

    protected async onInit(): Promise<void> {
        const background = this._renderer.createSprite('background');
        this._renderer.add(background);
       
    }
}
