import Application from './Application';
import { PixiEngine } from './engine/pixi/PixiEngine';

async function startGame() {
    const pixiEngine = new PixiEngine();
    const game = new Application(pixiEngine);
    await game.init();
}


startGame();