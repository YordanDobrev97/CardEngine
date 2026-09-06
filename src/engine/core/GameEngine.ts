import { RenderObject } from '../rendering/RenderObject';
import { TextStyle } from '../ui/TextStyle';

export interface GameEngine {
    init(): Promise<void>;
    mount(element: HTMLElement): void;
    destroy(): void;
    createSprite(assetKey: string): RenderObject;
    addToScene(object: RenderObject): void;
    applyLayout(): void;
    createText(value: string, options: TextStyle): RenderObject;
}