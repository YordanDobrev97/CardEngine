import { Assets } from 'pixi.js';
import { AssetConfig } from './types/AssetConfig';

export class GameLoader {
    private _gameId: string | null;

    constructor(gameId: string) {
        this._gameId = gameId;
    }

    async load(config: AssetConfig) {
        const entries = Object.entries(config);

        for (const [alias, fileName] of entries) {
            Assets.add({alias, src: this.resolvePath(fileName)});
        }

        await Assets.load(entries.map(([alias]) => alias));
    }

    private resolvePath(fileName: string) {
        return `/resources/${this._gameId}/${fileName}`;
    }
}