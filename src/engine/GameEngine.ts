import {GameRenderer} from './renders/GameRenderer';

export interface GameEngine {
    init(): Promise<void>;
    mount(element: HTMLElement): void;
    getRenderer(): GameRenderer;
    destroy(): void;
}