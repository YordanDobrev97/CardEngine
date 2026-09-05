import { BaseGame, GameEngine } from '../../engine/core';
import { AssetConfig } from '../../engine/types/AssetConfig';
import assets from './config/assets';

export class WarGame extends BaseGame {
    protected assets: AssetConfig = assets;

    constructor(gameId: string, gameEngine: GameEngine) {
        super(gameId, gameEngine);
    }

    protected async onInit(): Promise<void> {
        const background = this.createSprite('background');
        this.addToScene(background);
    }
}
