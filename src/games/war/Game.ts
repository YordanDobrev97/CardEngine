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
        const background = this.createSprite('background', {
            alpha: 0.4,
        });
        
        const title = this.createText('War', {
            layout: {
                horizontal: 'center',
                vertical: 'top',
                shift: {
                    y: 100,
                }
            }
        });

        const subtitle = this.createText('Classic card battle', {
            layout: {
                horizontal: 'center',
                vertical: 'top',
                shift: {
                    y: 250
                }
            },
        })

        const playButton = this.createButton('Play', {
            layout: {
                horizontal: 'center',
                vertical: 'center'
            }
        })

        this.addToScene(background);
        this.addToScene(title);
        this.addToScene(subtitle);
        this.addToScene(playButton);
    }
}
