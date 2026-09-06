import { BaseGame, GameEngine } from '../../engine/core';
import { Theme } from '../../engine/theme/Theme';
import { AssetConfig } from '../../engine/types/AssetConfig';
import assets from './config/assets';

export class WarGame extends BaseGame {
    protected assets: AssetConfig = assets;

    constructor(
        gameId: string,
        gameEngine: GameEngine,
        theme: Theme,
    ) {
        super(gameId, gameEngine, theme);
    }

    protected async onInit(): Promise<void> {
        const background = this.createSprite('background');
        const title = this.createText('War');

        this.addToScene(background);
        this.addToScene(title);
    }
}
