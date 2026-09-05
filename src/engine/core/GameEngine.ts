import {GameRenderer} from '../rendering/GameRenderer';

export interface GameEngine {
    init(): Promise<void>;
    mount(element: HTMLElement): void;
    getRenderer(): GameRenderer;
    destroy(): void;
}