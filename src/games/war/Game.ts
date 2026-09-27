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
        const background = this.createBackground({
            type: 'color',
            color: '#11493E'
        })
        
        const title = this.createText('War', {
            layout: {
                horizontal: 'center',
                vertical: 'top',
                shift: {
                    y: 100,
                }
            }
        });

        const subtitle = this.createText('Класическа игра с карти', {
            layout: {
                horizontal: 'center',
                vertical: 'top',
                shift: {
                    y: 180
                }
            },
        });

        const playButton = this.createButton('Играй', {
            layout: {
                horizontal: 'center',
                vertical: 'center',
            },
            variant: 'danger',
        });

         const rulesButton = this.createButton('Правила', {
            layout: {
                horizontal: 'center',
                vertical: 'center',
                shift: {
                    y: 75,
                }
            },
            variant: 'secondary',
        });

        const settingsButton = this.createButton('Настройки', {
            layout: {
                horizontal: 'center',
                vertical: 'center',
                shift: {
                    y: 145,
                }
            },
            variant: 'secondary',
        })

        this.addToScene(background);
        this.addToScene(title);
        this.addToScene(subtitle);
        this.addToScene(playButton);
        this.addToScene(rulesButton);
        this.addToScene(settingsButton);
    }
}
