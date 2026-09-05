import { RenderObject } from '../rendering/RenderObject';

export interface GameEngine {
    init(): Promise<void>;
    mount(element: HTMLElement): void;
    destroy(): void;
    createSprite(assetKey: string): RenderObject;
    addToScene(object: RenderObject): void;
}