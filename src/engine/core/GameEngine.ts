import { RenderObject } from '../rendering/RenderObject';
import { SpriteOptions } from '../ui/Sprite';
import { UIEngine } from '../ui/UIEngine';

export interface GameEngine {
    init(): Promise<void>;
    mount(element: HTMLElement): void;
    destroy(): void;
    createSprite(assetKey: string, options?: SpriteOptions): RenderObject;
    addToScene(object: RenderObject): void;
    applyLayout(): void;
    readonly ui: UIEngine;
}