import Application from './Application';
import { PixiEngine } from './engine/PixiEngine';

async function startGame() {
    const appElement = document.getElementById('app');
    if (!appElement) {
        throw new Error('App element not found');
    }

    const pixiEngine = new PixiEngine();
    const game = new Application(pixiEngine);
    await game.init();
}


startGame();